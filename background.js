chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.text) {
      chrome.storage.local.set({ selectedText: message.text }, () => {
        console.log("Selected text saved:", message.text);
      });
    }
  });
  