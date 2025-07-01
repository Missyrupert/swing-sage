// src/components/AnalysisOverlay.jsx - COMPLETE FILE (Enhanced Visual Overlays)
import React, { useRef, useEffect } from 'react';

const AnalysisOverlay = ({ analysisData, videoDimensions }) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Set canvas dimensions to match video
        canvas.width = videoDimensions.width;
        canvas.height = videoDimensions.height;

        // Clear previous drawings
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Define consistent styles
        ctx.strokeStyle = 'var(--accent-color)'; // Neon green lines
        ctx.fillStyle = 'var(--accent-color)'; // Text color
        ctx.lineWidth = 3;
        ctx.font = '16px Inter, sans-serif'; // Larger, clearer font

        // Helper function to draw text with a background for readability
        const drawTextWithBackground = (text, x, y, bgColor = 'rgba(0, 0, 0, 0.7)', textColor = 'var(--accent-color)') => {
            const textMetrics = ctx.measureText(text);
            const textWidth = textMetrics.width;
            const textHeight = parseInt(ctx.font, 10); // Estimate height from font size

            ctx.fillStyle = bgColor;
            ctx.fillRect(x - 5, y - textHeight - 5, textWidth + 10, textHeight + 10);
            
            ctx.fillStyle = textColor;
            ctx.fillText(text, x, y - 5);
            ctx.fillStyle = 'var(--accent-color)'; // Reset fill style
        };


        // --- Draw Mock Analysis Data Based on 'visuals' property ---
        if (analysisData && analysisData.visuals && Array.isArray(analysisData.visuals)) {
            analysisData.visuals.forEach(visual => {
                ctx.beginPath();
                switch (visual.type) {
                    case 'line':
                        // Coordinates are normalized (0 to 1), convert to canvas pixels
                        const startX = visual.start[0] * canvas.width;
                        const startY = visual.start[1] * canvas.height;
                        const endX = visual.end[0] * canvas.width;
                        const endY = visual.end[1] * canvas.height;

                        ctx.moveTo(startX, startY);
                        ctx.lineTo(endX, endY);
                        ctx.stroke();

                        // Draw label at the midpoint or near the line
                        if (visual.label) {
                            const midX = (startX + endX) / 2;
                            const midY = (startY + endY) / 2;
                            drawTextWithBackground(visual.label, midX, midY);
                        }
                        break;
                    case 'circle':
                        const centerX = visual.center[0] * canvas.width;
                        const centerY = visual.center[1] * canvas.height;
                        const radius = visual.radius * Math.min(canvas.width, canvas.height); // Scale radius

                        ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
                        ctx.stroke();

                        if (visual.label) {
                            drawTextWithBackground(visual.label, centerX - radius, centerY - radius - 10);
                        }
                        break;
                    case 'arrow': // For simulating weight shift etc.
                        const arrowStartX = visual.start[0] * canvas.width;
                        const arrowStartY = visual.start[1] * canvas.height;
                        const arrowEndX = visual.end[0] * canvas.width;
                        const arrowEndY = visual.end[1] * canvas.height;

                        ctx.moveTo(arrowStartX, arrowStartY);
                        ctx.lineTo(arrowEndX, arrowEndY);
                        ctx.stroke();

                        // Draw arrowhead (simple triangle)
                        const angle = Math.atan2(arrowEndY - arrowStartY, arrowEndX - arrowStartX);
                        ctx.save();
                        ctx.translate(arrowEndX, arrowEndY);
                        ctx.rotate(angle);
                        ctx.lineTo(-10, 5);
                        ctx.lineTo(-10, -5);
                        ctx.closePath();
                        ctx.fill();
                        ctx.restore();

                        if (visual.label) {
                             drawTextWithBackground(visual.label, arrowEndX + 10, arrowEndY + 10);
                        }
                        break;
                    // Add more complex drawing types here as needed (e.g., angles, paths)
                    default:
                        console.warn('Unknown visual type:', visual.type);
                }
            });
        }

    }, [analysisData, videoDimensions]); // Redraw when analysisData or videoDimensions change

    return (
        <canvas
            ref={canvasRef}
            className="analysis-overlay-canvas"
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                pointerEvents: 'none' /* Allow clicks to pass through to video */
            }}
        />
    );
};

export default AnalysisOverlay;