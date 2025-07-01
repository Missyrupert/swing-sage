    // Import the S3Client and GetObjectCommand from the AWS SDK v3.
    // We also import the pre-signer function.
    import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
    import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
    import { randomUUID } from "crypto"; // To generate a unique file name

    // Initialize the S3 Client.
    // The SDK will automatically use the credentials and region from the Lambda's execution environment.
    const s3Client = new S3Client({ region: "us-east-1" });

    // This is the main handler function for the Lambda.
    export const handler = async (event) => {
    console.log("Received event:", JSON.stringify(event));

    // The S3 bucket name from our setup.
    const BUCKET_NAME = "swing-sage-uploads-20240523-a1b2c3";

    try {
        // Generate a unique identifier for the S3 object key.
        // This prevents file name collisions.
        const objectKey = `${randomUUID()}.mp4`;

        // Create a command to put an object in the S3 bucket.
        const command = new PutObjectCommand({
        Bucket: BUCKET_NAME,
        Key: objectKey,
        ContentType: "video/mp4", // We expect the client to upload an MP4 video.
        });

        // Generate the pre-signed URL.
        // This URL will be valid for a `PUT` operation for 10 minutes (600 seconds).
        const signedUrl = await getSignedUrl(s3Client, command, {
        expiresIn: 600,
        });

        // Return a successful response to the client (our React app).
        // The body contains the URL the client will use for the upload
        // and the objectKey so it knows the final name of the file.
        return {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Origin": "http://localhost:3000", // Allow our React app
            "Access-Control-Allow-Methods": "POST",
            "Access-Control-Allow-Headers": "Content-Type",
        },
        body: JSON.stringify({
            uploadUrl: signedUrl,
            key: objectKey,
        }),
        };
    } catch (error) {
        console.error("Error generating pre-signed URL", error);
        return {
        statusCode: 500,
        headers: {
            "Access-Control-Allow-Origin": "http://localhost:3000",
        },
        body: JSON.stringify({ message: "Internal Server Error" }),
        };
    }
    };