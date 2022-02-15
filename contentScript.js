chrome.storage.sync.get(["neko-toggle"], function (result) {
  if (result["neko-toggle"]) {
    let v = document.getElementById("ivsplayer01-container");
    v.setAttribute("style", "display:none;");
    
    let b = document.getElementsByTagName("body")[0];
    b.classList.remove("locked", "content-with-lock");

    let wrapper = document.getElementsByClassName("prompt-login-wrapper")[0];
    wrapper.setAttribute("style", "display:none;");
  }
});
