
// src/components/VideoUploader.jsx - CONFIRMED FILE
import React, { useState } from 'react';
import { UploadCloud } from 'lucide-react'; // npm install lucide-react

const VideoUploader = ({ onUploadSuccess }) => {
    const [isUploading, setIsUploading] = useState(false);
    const [uploadProgress, setUploadProgress] = useState(0);
    const [errorMessage, setErrorMessage] = useState('');

    const handleFileChange = async (event) => {
        const file = event.target.files[0];
        if (!file) return;

        if (!file.type.startsWith('video/')) {
            setErrorMessage('Please upload a valid video file.');
            return;
        }

        setErrorMessage('');
        setIsUploading(true);
        setUploadProgress(0);

        console.log(`Starting upload for: ${file.name}, size: ${file.size} bytes`);

        // --- MOCK UPLOAD PROCESS ---
        // THIS IS WHERE YOUR ACTUAL BACKEND API CALL WOULD GO
        // Example with fetch API:
        /*
        const formData = new FormData();
        formData.append('video', file);
        try {
            const response = await fetch('/api/upload-video', { // Your backend API endpoint
                method: 'POST',
                body: formData,
                // You might use an XHR or Axios for proper progress tracking
                // For fetch, progress can be tricky, often requires streaming or chunking
            });
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Video upload failed on server.');
            }
            const data = await response.json();
            // Assuming backend returns { videoUrl, analysisData, swingStage }
            onUploadSuccess(data.videoUrl, data.analysisData, data.swingStage);
        } catch (error) {
            setErrorMessage(`Upload error: ${error.message}`);
            setIsUploading(false);
            setUploadProgress(0);
            return;
        }
        */

        // Simulating upload progress and delay for frontend demo
        let progress = 0;
        const interval = setInterval(() => {
            progress += 10;
            setUploadProgress(progress);
            if (progress >= 100) {
                clearInterval(interval);
                setIsUploading(false);
                console.log('Mock upload complete!');

                // Use a local Blob URL for immediate preview of the uploaded file
                const mockUploadedVideoLocalUrl = URL.createObjectURL(file);

                onUploadSuccess(
                    mockUploadedVideoLocalUrl, // This will show your uploaded video locally
                    // Mock analysis data (replace with actual data from your backend later)
                    {
                        hipRotation: Math.floor(Math.random() * 60) + 30, // Random mock analysis
                        shoulderTurn: Math.floor(Math.random() * 30) + 70,
                        clubPath: Math.random() > 0.5 ? 'in-to-out' : 'out-to-in',
                        swingPlane: Math.random() > 0.5 ? 'on-plane' : 'too-steep',
                        impactAngle: (Math.random() * 10 - 5).toFixed(1), // Between -5 and 5
                    },
                    ['setup', 'takeaway', 'backswing', 'transition', 'impact', 'follow-through', 'finish'][Math.floor(Math.random() * 7)] // Random swing stage
                );
            }
        }, 100);
    };

    return (
        <div className="video-uploader card fade-in" style={{ textAlign: 'center', padding: 'var(--spacing-lg)' }}>
            <h3 style={{ color: 'var(--accent-color)', marginBottom: 'var(--spacing-md)' }}>Upload Your Swing Video</h3>
            <p style={{ marginBottom: 'var(--spacing-lg)' }}>Get instant AI-powered analysis and personalized tips.</p>

            <label htmlFor="video-upload-input" className="button button-accent upload-button" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
                <UploadCloud size={20} /> Select Video File
                <input
                    id="video-upload-input"
                    type="file"
                    accept="video/*"
                    onChange={handleFileChange}
                    disabled={isUploading}
                    style={{ display: 'none' }}
                />
            </label>

            {isUploading && (
                <div className="upload-progress-area" style={{ marginTop: 'var(--spacing-md)' }}>
                    <p>Uploading... {uploadProgress}%</p>
                    <div style={{
                        width: '100%',
                        backgroundColor: 'var(--tertiary-bg)',
                        borderRadius: 'var(--border-radius-sm)',
                        height: '10px',
                        marginTop: '10px'
                    }}>
                        <div style={{
                            width: `${uploadProgress}%`,
                            backgroundColor: 'var(--accent-color)',
                            height: '100%',
                            borderRadius: 'var(--border-radius-sm)',
                            transition: 'width 0.1s ease-out'
                        }}></div>
                    </div>
                </div>
            )}

            {errorMessage && (
                <p style={{ color: 'var(--danger-color)', marginTop: 'var(--spacing-sm)' }}>{errorMessage}</p>
            )}

            {!isUploading && !errorMessage && uploadProgress === 0 && (
                <p style={{ marginTop: 'var(--spacing-md)', fontSize: '0.9em', opacity: 0.8 }}>
                    Supported formats: MP4, MOV. Max size: 2GB.
                </p>
            )}
        </div>
    );
};

export default VideoUploader;
