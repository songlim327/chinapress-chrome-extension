document.addEventListener("DOMContentLoaded", function() {
  let toggle = document.querySelector('input[id="neko-toggle"]');

  chrome.storage.sync.get(["neko-toggle"], function(result) {
    if (Object.keys(result).length === 0) {
      toggle.checked = true;
      chrome.storage.sync.set({ "neko-toggle": toggle.checked });
    } else {
      toggle.checked = result["neko-toggle"];
    }
  });

  toggle.addEventListener("click", function() {
    chrome.storage.sync.set({ "neko-toggle": toggle.checked });
  });
});
