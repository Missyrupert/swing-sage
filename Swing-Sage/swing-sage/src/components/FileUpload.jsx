import React, { useState } from 'react';

const FileUpload = () => {
  // State to hold the selected file
  const [selectedFile, setSelectedFile] = useState(null);
  // State to track upload status
  const [uploading, setUploading] = useState(false);

  // Your unique API Gateway endpoint URL
  const API_ENDPOINT = 'https://x72ago82mf.execute-api.eu-north-1.amazonaws.com/default/swing-sage-presigned-url-generator'; 

  // Function to handle file selection from the input
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  // Function to handle the entire upload process
  const handleUpload = async () => {
    if (!selectedFile) {
      alert('Please select a file first!');
      return;
    }

    setUploading(true);

    try {
      // 1. Get the pre-signed URL from our Lambda function
      console.log('Requesting pre-signed URL...');
      const response = await fetch(API_ENDPOINT, {
        method: 'POST', // Or GET, since our Lambda doesn't check the method
      });

      if (!response.ok) {
        throw new Error('Failed to get pre-signed URL.');
      }

      const { uploadUrl, key } = await response.json();
      console.log('Received pre-signed URL:', uploadUrl);
      console.log('File will be saved with key:', key);

      // 2. Upload the file directly to S3 using the pre-signed URL
      console.log('Uploading file to S3...');
      const uploadResponse = await fetch(uploadUrl, {
        method: 'PUT',
        body: selectedFile,
        headers: {
          'Content-Type': selectedFile.type, // Important to set the content type
        },
      });

      if (!uploadResponse.ok) {
        throw new Error('S3 upload failed.');
      }

      console.log('Upload successful!');
      alert(`File uploaded successfully! File key: ${key}`);

    } catch (error) {
      console.error('Upload error:', error);
      alert(`Upload failed: ${error.message}`);
    } finally {
      setUploading(false);
      setSelectedFile(null); // Reset the file input
    }
  };

  return (
    <div style={{ padding: '20px', border: '2px solid #ccc', borderRadius: '10px', maxWidth: '400px', margin: '20px auto' }}>
      <h2>Swing Sage Video Uploader</h2>
      <input type="file" accept="video/mp4" onChange={handleFileChange} disabled={uploading} />
      <button onClick={handleUpload} disabled={!selectedFile || uploading}>
        {uploading ? 'Uploading...' : 'Upload Video'}
      </button>
    </div>
  );
};

export default FileUpload;