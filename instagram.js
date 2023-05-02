// Hide follower and following numbers on Instagram
function hideInstagramNumbers() {
  const followers = document.querySelectorAll("ul.x78zum5.x1q0g3np.xieb3on");
  const followings = document.querySelectorAll("ul.x78zum5.x1q0g3np.xieb3on");
  followers.forEach((follower) => {
    follower.style.display = "none";
  });
  followings.forEach((following) => {
    following.style.display = "none";
  });
}

// Listen for DOM changes on Instagram
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

// Call the functions
hideInstagramNumbers();
observeInstagramChanges();
