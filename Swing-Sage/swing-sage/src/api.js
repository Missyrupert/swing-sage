/**
 * A mock function to simulate an AI response.
 * The `export` keyword makes the function available to other files.
 */
export async function getAIResponse(prompt) {
  console.log(`Sending prompt to mock AI: "${prompt}"`);

  // Simulate a network delay
  await new Promise(resolve => setTimeout(resolve, 1500));

  const lowerCasePrompt = prompt.toLowerCase();

  // NEW: Return a structured object for swing analysis
  if (lowerCasePrompt.includes("general swing analysis")) {
    return {
      score: 82,
      summary: "A very solid swing with a great foundation. Your tempo is consistent, but there's a slight 'over-the-top' move on the downswing which can lead to a slice. Focusing on initiating the downswing with your lower body will bring you to the next level.",
      pros: [
        "Excellent posture and setup.",
        "Smooth and controlled takeaway.",
        "Good balance throughout the swing."
      ],
      cons: [
        "Slight 'over-the-top' motion at the start of the downswing.",
        "Head moves slightly forward at impact.",
        "Clubface is slightly open at the top of the swing."
      ]
    };
  }

  // Existing logic for the dashboard chat
  if (lowerCasePrompt.includes("slice")) {
    return "To fix your slice, focus on your grip and swing path. A common cause is an 'out-to-in' swing. Try to swing more from the inside.";
  } else if (lowerCasePrompt.includes("hook")) {
    return "A hook is often caused by an overly strong grip or closing the clubface too early. Try weakening your grip slightly and feel the clubface stay square through impact.";
  } else {
    return "That's a great question. For consistent shots, always remember to maintain your balance and tempo throughout the swing. A smooth rhythm is key.";
  }
}