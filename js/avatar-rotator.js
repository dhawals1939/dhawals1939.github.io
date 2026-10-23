(function () {
  const basePath = "./img/me/";
  // Keep in sync with the contents of /img/me/ (GitHub Pages can't list directories).
  const files = ["me01.jpg", "me02.jpg", "me03.jpg", "me04.jpg", "me05.png", "me06.jpg", "me07.jpg"];
  const intervalMs = 5000;
  const fadeMs = 400;

  const avatar = document.getElementById("avatar-img");
  const faviconLink = document.getElementById("site-favicon");
  const storageKey = "avatarIndex";

  function pickIndex(prevIndex) {
    if (files.length <= 1) return 0;
    let i;
    do {
      i = Math.floor(Math.random() * files.length);
    } while (i === prevIndex);
    return i;
  }

  function swapFavicon(href) {
    if (faviconLink) faviconLink.href = href;
  }

  function show(index) {
    const src = basePath + files[index];
    try {
      localStorage.setItem(storageKey, String(index));
    } catch {}
    if (!avatar) return;

    // Preload so the swap happens only once the new image is ready.
    const next = new Image();
    next.onload = () => {
      avatar.style.opacity = "0";
      setTimeout(() => {
        avatar.src = src;
        avatar.srcset = "";
        avatar.style.opacity = "1";
      }, fadeMs);
    };
    next.src = src;
  }

  let prev = -1;
  try {
    prev = parseInt(localStorage.getItem(storageKey) || "-1", 10);
  } catch {}
  let current = pickIndex(isNaN(prev) ? -1 : prev);
  show(current);
  swapFavicon(basePath + files[current]);

  setInterval(() => {
    if (document.hidden) return;
    current = pickIndex(current);
    show(current);
  }, intervalMs);
})();
