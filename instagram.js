function hideInstagramNumbers() {
  const postsFollowersFollowing = document.querySelectorAll("span._ac2a");
  postsFollowersFollowing.forEach((postsFollowersFollowing) => {
    postsFollowersFollowing.style.display = "none";
  });
}

function observeInstagramChanges() {
  const targetNode = document.querySelector("body");
  const config = { childList: true, subtree: true };
  const callback = function (mutationsList, observer) {
    for (const mutation of mutationsList) {
      if (mutation.type === "childList") {
        hideInstagramNumbers();
      }
    }
  };
  const observer = new MutationObserver(callback);
  observer.observe(targetNode, config);
}

hideInstagramNumbers();
observeInstagramChanges();
