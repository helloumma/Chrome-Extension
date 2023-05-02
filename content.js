const isInstagram = window.location.hostname === "www.instagram.com";
const isTwitter = window.location.hostname === "twitter.com";

if (isInstagram) {
  const followers = document.querySelectorAll("span.g47SY");
  followers.forEach((follower) => {
    follower.style.display = "none";
  });
}

if (isTwitter) {
  const followers = document.querySelectorAll(
    'span[data-testid="follower_count"]'
  );
  followers.forEach((follower) => {
    follower.style.display = "none";
  });
}
