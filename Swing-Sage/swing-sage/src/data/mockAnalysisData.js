// src/data/mockAnalysisData.js - COMPLETE FILE
const mockAnalysisData = {
    'setup': {
        summary: "Excellent foundation! Your setup shows good balance and alignment, crucial for a consistent swing.",
        feedback: [
            { metric: "Posture Angle", value: "92°", ideal: "90-95°", status: "Good", tip: "Maintain this athletic posture through your entire swing." },
            { metric: "Ball Position", value: "Center-Front", ideal: "Consistent with club", status: "Good", tip: "Ensure ball is off the lead heel for driver, and middle for irons." },
            { metric: "Grip Pressure", value: "6/10", ideal: "5-7/10", status: "Good", tip: "Keep hands relaxed to promote clubhead speed and feel." },
            { metric: "Alignment", value: "Slightly Closed", ideal: "Parallel to target", status: "Needs Improvement", tip: "Practice aiming drills. Use an alignment stick to ensure feet, hips, and shoulders are parallel to your target line." }
        ],
        visuals: [
            { type: 'line', start: [0.2, 0.8], end: [0.8, 0.2], label: 'Spine Angle' },
            { type: 'circle', center: [0.5, 0.6], radius: 0.05, label: 'Head Position' }
        ],
        aiTip: "**Setup Insight:** A strong setup dictates your swing path. Focus on your spine angle and maintaining a relaxed grip. For optimal power, ensure your weight is evenly distributed."
    },
    'takeaway': {
        summary: "Smooth start! Your club is moving back on a good path, setting you up for a powerful backswing.",
        feedback: [
            { metric: "Club Path", value: "Inside-Out", ideal: "Neutral to slightly inside", status: "Good", tip: "Keep arms connected to your body for a unified start." },
            { metric: "Wrist Hinge", value: "Minimal", ideal: "Lagging slightly", status: "Good", tip: "Allow wrists to hinge naturally as the club travels back." },
            { metric: "Body Turn", value: "Early Hip Turn", ideal: "Shoulders initiate", status: "Needs Improvement", tip: "Focus on a one-piece takeaway where shoulders, arms, and club move together initially. Avoid 'flicking' the club back with your hands." }
        ],
        visuals: [
            { type: 'line', start: [0.6, 0.9], end: [0.7, 0.7], label: 'Club Path' },
        ],
        aiTip: "**Takeaway Insight:** The takeaway sets your swing plane. Ensure a smooth, connected motion, letting your shoulders initiate the movement before the club gets too far inside."
    },
    'backswing': {
        summary: "Solid coil! You're building power, but watch out for a slight over-rotation.",
        feedback: [
            { metric: "Shoulder Turn", value: "95°", ideal: "90-100°", status: "Good", tip: "Maintain your spine angle throughout the turn." },
            { metric: "Hip Turn", value: "55°", ideal: "45-60°", status: "Good", tip: "Allow natural hip rotation, don't restrict it too much." },
            { metric: "Lead Arm", value: "Slightly Bent", ideal: "Straight but not stiff", status: "Needs Improvement", tip: "Aim for a straighter lead arm at the top of the backswing to increase your swing arc and power." },
            { metric: "Top of Backswing", value: "Slightly Over-Rotated", ideal: "Compact & Powerful", status: "Needs Improvement", tip: "Avoid going past parallel with the club shaft. A compact backswing provides more control and consistent timing." }
        ],
        visuals: [
            { type: 'line', start: [0.2, 0.8], end: [0.7, 0.1], label: 'Swing Plane' },
            { type: 'circle', center: [0.3, 0.5], radius: 0.07, label: 'Hip Turn' }
        ],
        aiTip: "**Backswing Insight:** A powerful backswing is all about coil. Focus on a full shoulder turn, keeping your lead arm straight, and preventing over-rotation for better control and impact."
    },
    'transition': {
        summary: "Good shift! You're initiating the downswing effectively with your lower body.",
        feedback: [
            { metric: "Weight Shift", value: "Initiated", ideal: "Lower body first", status: "Good", tip: "Feel the shift to your lead side before arms drop." },
            { metric: "Hip Clearance", value: "Starting", ideal: "Opening towards target", status: "Good", tip: "Continue clearing your hips to create space for the arms." },
            { metric: "Club Lag", value: "Good", ideal: "Significant", status: "Good", tip: "Maintain the angle between your lead arm and the club for maximum power." }
        ],
        visuals: [
            { type: 'arrow', start: [0.5, 0.5], end: [0.4, 0.7], label: 'Weight Shift' },
        ],
        aiTip: "**Transition Insight:** The critical moment where power is stored and unleashed. Lead with your lower body, feeling the weight shift to your lead foot to create a powerful downswing sequence."
    },
    'impact': {
        summary: "Excellent contact! You're delivering the club to the ball powerfully.",
        feedback: [
            { metric: "Club Face Angle", value: "0° (Square)", ideal: "0° to target", status: "Good", tip: "Keep this consistent for straight shots." },
            { metric: "Attack Angle", value: "-3° (Downward)", ideal: "-2 to -5° for irons", status: "Good", tip: "Hitting down on the ball for irons creates solid contact and spin." },
            { metric: "Weight Distribution", value: "75% Lead Side", ideal: "70-80% Lead Side", status: "Good", tip: "This indicates a powerful transfer of energy through the ball." },
            { metric: "Hip Rotation at Impact", value: "40° Open", ideal: "30-50° Open", status: "Good", tip: "Great job clearing your hips, generating power and speed." }
        ],
        visuals: [
            { type: 'line', start: [0.4, 0.6], end: [0.6, 0.4], label: 'Impact Plane' },
            { type: 'circle', center: [0.5, 0.5], radius: 0.03, label: 'Ball' }
        ],
        aiTip: "**Impact Insight:** The moment of truth. Focus on a downward strike with irons, and sweeping with woods, ensuring your weight is transferred to the lead side for maximum power and control."
    },
    'follow-through': {
        summary: "Balanced finish! Your swing energy is dissipating smoothly.",
        feedback: [
            { metric: "Balance", value: "Stable", ideal: "Fully balanced", status: "Good", tip: "Hold your finish until the ball lands for ultimate balance check." },
            { metric: "Club Path", value: "On Target Line", ideal: "Consistent", status: "Good", tip: "This indicates good directional control after impact." }
        ],
        visuals: [], // No specific visuals for follow-through mock
        aiTip: "**Follow-Through Insight:** A good follow-through confirms a balanced swing. Let your body naturally rotate, facing the target, holding your finish until the ball lands."
    },
    'finish': {
        summary: "Textbook finish! Full rotation, fully balanced, ready for the next shot.",
        feedback: [
            { metric: "Full Rotation", value: "Complete", ideal: "Shoulders facing target", status: "Good", tip: "Great job completing your rotation and using your full body." },
            { metric: "Balance", value: "Perfect", ideal: "Stable on lead foot", status: "Good", tip: "This is a sign of a well-executed swing and energy transfer." }
        ],
        visuals: [], // No specific visuals for finish mock
        aiTip: "**Finish Insight:** A perfect finish is a result of a powerful, balanced swing. Ensure full body rotation and maintain balance, showcasing efficient energy transfer."
    },
};

export default mockAnalysisData;