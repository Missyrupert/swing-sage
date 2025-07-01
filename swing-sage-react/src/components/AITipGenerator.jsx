// src/components/AITipGenerator.jsx - COMPLETE FILE
import React, { useState, useEffect } from 'react';
import AITipDisplay from './AITipDisplay'; // Re-use our existing display component

// Data for our dropdowns
const swingStages = [
    { label: 'Select Swing Stage', value: '' },
    { label: 'Setup', value: 'setup' },
    { label: 'Takeaway', value: 'takeaway' },
    { label: 'Backswing', value: 'backswing' },
    { label: 'Transition', value: 'transition' },
    { label: 'Impact', value: 'impact' },
    { label: 'Follow-through', value: 'follow-through' },
    { label: 'Finish', value: 'finish' },
];

const userProfiles = [
    { label: 'Beginner', value: 'beginner' },
    { label: 'Recreational', value: 'recreational' },
    { label: 'Amateur', value: 'amateur' },
    { label: 'Senior Golfer', value: 'senior' },
    { label: 'Junior Golfer', value: 'junior' },
    { label: 'Lady Golfer', value: 'ladies' },
];

const AITipGenerator = () => {
    const [selectedStage, setSelectedStage] = useState('');
    const [selectedProfile, setSelectedProfile] = useState(userProfiles[0].value); // Default to Beginner
    const [activeTipType, setActiveTipType] = useState('quick'); // 'quick' or 'detailed'
    const [aiTipContent, setAiTipContent] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    // This useEffect hook will trigger a "tip generation" whenever selection changes
    useEffect(() => {
        // Only attempt to fetch a tip if a swing stage is selected
        if (!selectedStage) {
            setAiTipContent('');
            return;
        }

        setIsLoading(true);
        setAiTipContent(''); // Clear previous tip while loading

        // --- MOCK API CALL TO GENERATE TIP ---
        // In a real application, this would be an actual fetch or axios call to your
        // backend's AI tip generation endpoint (e.g., /api/generate-tip)
        const fetchTip = async () => {
            try {
                await new Promise(resolve => setTimeout(resolve, 800)); // Simulate network delay

                let tip = '';
                // Basic mocking logic - your backend AI would be much smarter
                if (activeTipType === 'quick') {
                    switch (selectedStage) {
                        case 'setup':
                            tip = `**Quick Tip for Setup (${selectedProfile}):** Ensure your grip is neutral and your stance is balanced.`;
                            break;
                        case 'impact':
                            tip = `**Quick Tip for Impact (${selectedProfile}):** Focus on hitting down and through the ball for solid contact.`;
                            break;
                        case 'backswing':
                            tip = `**Quick Tip for Backswing (${selectedProfile}):** Keep your lead arm straight and coil fully.`;
                            break;
                        default:
                            tip = `**Quick Tip for ${selectedStage} (${selectedProfile}):** Maintain a smooth tempo throughout this phase.`;
                    }
                    if (selectedProfile === 'senior') tip += ` Consider easing off for better control.`;
                    if (selectedProfile === 'ladies') tip += ` Utilize your full body turn for power.`;
                    if (selectedProfile === 'junior') tip += ` Focus on fun and fundamental movement!`;

                } else { // Detailed Breakdown
                    switch (selectedStage) {
                        case 'setup':
                            tip = `**Detailed Breakdown for Setup (${selectedProfile}):**\n\nA perfect setup is the cornerstone of a consistent swing. For ${selectedProfile} golfers, common errors include poor alignment (aiming left or right of target), an incorrect ball position for the club being used, or an overly tense grip. Ensure your feet, hips, and shoulders are aligned parallel to your target line. Position the ball correctly (e.g., driver off the lead heel, irons middle of stance). Relax your grip pressure to avoid tension. A balanced, athletic posture allows for a free and powerful swing.`;
                            break;
                        case 'impact':
                            tip = `**Detailed Breakdown for Impact (${selectedProfile}):**\n\nImpact is the moment of truth. For ${selectedProfile} golfers, a common issue is 'flipping' at the ball or coming over the top. The goal is to hit the ball first, then the turf (for irons). At impact, your hands should be slightly ahead of the clubhead, and your weight should be shifting towards your lead foot. Imagine driving down and through the ball. Practice drills like the 'towel drill' (towel under lead armpit) to keep your arms connected to your body and promote a more powerful impact position.`;
                            break;
                        case 'backswing':
                            tip = `**Detailed Breakdown for Backswing (${selectedProfile}):**\n\nThe backswing sets the stage for the rest of your swing. For ${selectedProfile} golfers, focus on coiling your body rather than just lifting your arms. A full shoulder turn is crucial, allowing your back to face the target. Keep your lead arm relatively straight without locking the elbow. Avoid swaying or reverse pivoting. A controlled, smooth backswing will lead to a more balanced and powerful downswing. Remember, it's about creating leverage, not just height.`;
                            break;
                        default:
                            tip = `**Detailed Breakdown for ${selectedStage} (${selectedProfile}):**\n\nThis phase of the swing is critical for connecting your earlier movements to the next. For ${selectedProfile} golfers, focus on maintaining proper sequencing. Avoid rushing or breaking down your posture. Ensure your weight transfers smoothly and that your club stays on plane. Regular practice with slow-motion drills can greatly improve your feel and control during this complex motion.`;
                    }
                    if (selectedProfile === 'senior') tip += ` Focus on fluidity and preserving energy. Don't over-rotate if it causes discomfort. Tempo is your friend.`;
                    if (selectedProfile === 'ladies') tip += ` Emphasize core engagement and hip rotation to generate clubhead speed efficiently. Think about a powerful coil.`;
                    if (selectedProfile === 'junior') tip += ` Keep it simple and fun! Focus on the basic movement patterns and enjoy the process of learning. Proper setup and finish are key fundamentals.`;
                }
                setAiTipContent(tip);
            } catch (error) {
                console.error("Error fetching AI tip:", error);
                setAiTipContent("Sorry, couldn't generate a tip right now. Please try again.");
            } finally {
                setIsLoading(false);
            }
        };

        fetchTip();
    }, [selectedStage, selectedProfile, activeTipType]); // Dependencies: re-run when these change

    return (
        <section className="ai-tip-section">
            <h2 className="section-title">AI Powered Golf Tips</h2>
            <div className="ai-controls-grid card">
                <div className="control-group">
                    <label htmlFor="swing-stage-select">Focus Area:</label>
                    <select
                        id="swing-stage-select"
                        value={selectedStage}
                        onChange={(e) => setSelectedStage(e.target.value)}
                        className="select-dropdown"
                    >
                        {swingStages.map(stage => (
                            <option key={stage.value} value={stage.value}>{stage.label}</option>
                        ))}
                    </select>
                </div>
                <div className="control-group">
                    <label htmlFor="user-profile-select">Your Profile:</label>
                    <select
                        id="user-profile-select"
                        value={selectedProfile}
                        onChange={(e) => setSelectedProfile(e.target.value)}
                        className="select-dropdown"
                    >
                        {userProfiles.map(profile => (
                            <option key={profile.value} value={profile.value}>{profile.label}</option>
                        ))}
                    </select>
                </div>
                <div className="tip-type-buttons">
                    <button
                        className={`button ${activeTipType === 'quick' ? 'active' : ''}`}
                        onClick={() => setActiveTipType('quick')}
                    >
                        Quick Tip
                    </button>
                    <button
                        className={`button ${activeTipType === 'detailed' ? 'active' : ''}`}
                        onClick={() => setActiveTipType('detailed')}
                    >
                        Detailed Breakdown
                    </button>
                </div>
            </div>

            <div className="tip-output-area">
                {isLoading && <p className="loading-state fade-in">Generating tip...</p>}
                {!isLoading && aiTipContent && <AITipDisplay tipContent={aiTipContent} />}
                {!isLoading && !aiTipContent && selectedStage && (
                    <p className="placeholder-text fade-in">Select a tip type (Quick or Detailed) to generate advice.</p>
                )}
                {!isLoading && !aiTipContent && !selectedStage && (
                    <p className="placeholder-text fade-in">Please select a Swing Focus Area and Your Profile to get started!</p>
                )}
            </div>
        </section>
    );
};

export default AITipGenerator;