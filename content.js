document.addEventListener("mouseup", () => {
  const selectedText = window.getSelection().toString().trim();
  console.log("Selected text:", selectedText);  // Log the selected text for debugging
  if (selectedText) {
    chrome.runtime.sendMessage({ text: selectedText });
  }
});
