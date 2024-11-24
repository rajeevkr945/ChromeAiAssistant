document.getElementById("processBtn").addEventListener("click", async () => {
  const action = document.getElementById("actionSelect").value;
  const inputText = document.getElementById("inputText").value;
  const summaryDiv = document.getElementById("summary");

  if (!inputText.trim()) {
    alert("Please paste some text!");
    return;
  }

  let prompt = '';
  if (action === "summarize") {
    prompt = "Summarize this message: " + inputText;
  } else if (action === "grammar") {
    prompt = "Correct any spelling or grammar mistakes in this text: " + inputText;
  } else if (action === "composeEmail") {
    prompt = "Compose an email based on this text: " + inputText;
  }

  summaryDiv.textContent = "Processing...";

  const API_URL = "https://api.openai.com/v1/chat/completions";
  const API_KEY = "";  // cash koduth ulla GPT ile link vechal mathre work avu guys(Paid gpt keys only)

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ "role": "user", "content": prompt }],
        max_tokens: 100,
      }),
    });

    if (!response.ok) throw new Error("Failed to fetch response from API.");

    const data = await response.json();
    const apiResponse = data.choices[0].message.content;

    // Format the response with line breaks
    const formattedResponse = apiResponse.replace(/(?:\r\n|\r|\n)/g, "<br>");

    // Show formatted summary
    document.getElementById("summary").innerHTML = formattedResponse;

  } catch (error) {
    document.getElementById("summary").textContent = `Error: ${error.message}`;
  }
});
