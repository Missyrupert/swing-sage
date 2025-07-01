// src/components/VideoPlayer.jsx - COMPLETE FILE (Updated with React.forwardRef)
import React, { useRef, useEffect, forwardRef, useImperativeHandle } from 'react';

// Use forwardRef to allow parent components to get a ref to the internal <video> element
const VideoPlayer = forwardRef(({ src, controls = true, loop = false, muted = false, autoplay = false, onTimeUpdate, onLoadedMetadata }, ref) => {
    const internalVideoRef = useRef(null);

    // useImperativeHandle allows us to expose specific methods or properties
    // of the internal video element to the parent's ref.
    // In this case, we're exposing the video element itself.
    useImperativeHandle(ref, () => ({
        get videoElement() {
            return internalVideoRef.current;
        }
    }));

    useEffect(() => {
        if (internalVideoRef.current) {
            if (autoplay) {
                internalVideoRef.current.play().catch(error => console.log("Autoplay prevented:", error));
            }
        }
    }, [src, autoplay]);

    return (
        <video
            ref={internalVideoRef} // Assign the internal ref here
            src={src}
            controls={controls}
            loop={loop}
            muted={muted}
            className="video-player"
            onTimeUpdate={onTimeUpdate}
            onLoadedMetadata={onLoadedMetadata}
            playsInline // Important for mobile devices
        >
            Your browser does not support the video tag.
        </video>
    );
});

export default VideoPlayer;