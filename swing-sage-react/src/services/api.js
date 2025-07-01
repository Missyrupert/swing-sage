/**
 * Mock AI Analysis Service.
 * Now acknowledges a second video for comparison context.
 */
export const getAIResponse = async (prompt, context = 'chat', video2 = null) => {
  console.log(`API called for: ${context}`);
  if (context === 'swingAnalysis') {
    console.log('Analyzing video:', prompt.name);
    // THE FIX: Acknowledge the second video if it exists
    if (video2) {
      console.log('Comparing against:', video2.name);
    }
  }

  await new Promise(resolve => setTimeout(resolve, 1500));

  if (context === 'swingAnalysis') {
    // In a real scenario, the response would change based on the comparison.
    // For now, we return the same detailed object.
    return {
      score: 82,
      summary: "A very solid swing with a great foundation. Compared to your second video, your tempo here is much more consistent. The main area for improvement remains the 'over-the-top' move on the downswing.",
      pros: ["Excellent posture and setup.", "Tempo is smoother than comparison video.", "Good balance throughout the swing."],
      cons: ["Slight 'over-the-top' motion.", "Head moves slightly forward at impact.", "Clubface slightly open at the top."]
    };
  }
  
  // Chat context remains the same
  const lowerCasePrompt = prompt.toLowerCase();
  if (lowerCasePrompt.includes("slice")) {
    return "To fix a slice, focus on your grip (not too weak) and your swing path (feel like you're swinging out to 'right field').";
  }
  if (lowerCasePrompt.includes("putt")) {
    return "For better putting, focus on distance control. Try the 'ladder drill': place balls at 3, 6, 9, and 12 feet from the hole.";
  }
  return "That's a great question! I'm best at providing tips on specific topics. For a full analysis of your swing, please use the Swing Analysis page.";
};