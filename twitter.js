function hideTwitterNumbers() {
  const followers = document.querySelectorAll("div.css-1dbjc4n.r-1mf7evn");
  const followingsPublic = document.querySelectorAll(
    "a.css-4rbku5.css-18t94o4.css-901oao.r-18jsvk2.r-1loqt21.r-37j5jr.r-a023e6.r-16dba41.r-rjixqe.r-bcqeeo.r-qvutc0"
  );
  const followingsPrivate = document.querySelectorAll(
    "div.css-1dbjc4n.r-13awgt0.r-18u37iz.r-1w6e6rj"
  );
  const likes = document.querySelectorAll(
    "div.css-901oao.css-1hf3ou5.r-14j79pv.r-37j5jr.r-n6v787.r-16dba41.r-1cwl3u0.r-bcqeeo.r-qvutc0"
  );
  followers.forEach((follower) => {
    follower.style.display = "none";
  });
  followingsPublic.forEach((followingsPublic) => {
    followingsPublic.style.display = "none";
  });
  followingsPrivate.forEach((followingsPrivate) => {
    followingsPrivate.style.display = "none";
  });
  likes.forEach((likes) => {
    likes.style.display = "none";
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
