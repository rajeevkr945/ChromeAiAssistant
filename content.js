document.addEventListener("mouseup", () => {
  const selectedText = window.getSelection().toString().trim();
  console.log("Selected text:", selectedText);  // debuging inu ulla logs
  if (selectedText) {
    chrome.runtime.sendMessage({ text: selectedText });
  }
});
