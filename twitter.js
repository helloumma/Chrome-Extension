// Hide follower and following numbers on Twitter
function hideTwitterNumbers() {
  const followers = document.querySelectorAll("div.css-1dbjc4n.r-1mf7evn");
  const followings = document.querySelectorAll("div.css-1dbjc4n.r-1mf7evn");
  followers.forEach((follower) => {
    follower.style.display = "none";
  });
  followings.forEach((following) => {
    following.style.display = "none";
  });
}

// Listen for DOM changes on Twitter
function observeTwitterChanges() {
  const targetNode = document.querySelector("body");
  const config = { childList: true, subtree: true };
  const callback = function (mutationsList, observer) {
    for (const mutation of mutationsList) {
      if (mutation.type === "childList") {
        hideTwitterNumbers();
      }
    }
  };
  const observer = new MutationObserver(callback);
  observer.observe(targetNode, config);
}

// Call the functions
hideTwitterNumbers();
observeTwitterChanges();
