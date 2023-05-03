function hideTwitterNumbers() {
  const followers = document.querySelectorAll("div.css-1dbjc4n.r-1mf7evn");
  const followings = document.querySelectorAll(
    "a.css-4rbku5.css-18t94o4.css-901oao.r-18jsvk2.r-1loqt21.r-37j5jr.r-a023e6.r-16dba41.r-rjixqe.r-bcqeeo.r-qvutc0"
  );
  followers.forEach((follower) => {
    follower.style.display = "none";
  });
  followings.forEach((following) => {
    following.style.display = "none";
  });
}

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

hideTwitterNumbers();
observeTwitterChanges();
