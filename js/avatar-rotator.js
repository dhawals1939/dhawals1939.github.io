(function () {
  const basePath = "./img/me/";
  const numericProbe = {
    prefix: "me",
    min: 1,
    max: 99,
    zeroPad: 2,
    exts: ["jpg", "jpeg", "png", "webp"]
  };

  const avatar = document.getElementById("avatar-img");
  const faviconLink = document.getElementById("site-favicon");
  const storageKey = "avatarIndex";

  function zeroPad(n, width) {
    const s = String(n);
    return width > 0 ? s.padStart(width, "0") : s;
  }

  async function listViaIndex() {
    try {
      const res = await fetch(basePath, { method: "GET" });
      if (!res.ok) return [];
      const ct = (res.headers.get("content-type") || "").toLowerCase();
      if (!ct.includes("text/html")) return [];
      const html = await res.text();
      const doc = new DOMParser().parseFromString(html, "text/html");
      const links = Array.from(doc.querySelectorAll("a[href]"))
        .map(a => a.getAttribute("href"))
        .filter(href => !!href && !href.startsWith("?") && !href.startsWith("/"));
      const allow = /\.(png|jpe?g|webp)$/i;
      return links.filter(h => allow.test(h)).map(h => decodeURIComponent(h));
    } catch {
      return [];
    }
  }

  async function listViaProbing() {
    const candidates = [];
    for (let n = numericProbe.min; n <= numericProbe.max; n++) {
      const num = zeroPad(n, numericProbe.zeroPad);
      for (const ext of numericProbe.exts) {
        candidates.push(`${numericProbe.prefix}${num}.${ext}`);
      }
    }
    const checks = candidates.map(name => new Promise(resolve => {
      const img = new Image();
      img.onload = () => resolve(name);
      img.onerror = () => resolve(null);
      img.src = basePath + name;
    }));
    const results = await Promise.all(checks);
    return results.filter(Boolean);
  }

  function pickIndex(list, prevIndex) {
    if (list.length === 0) return -1;
    if (list.length === 1) return 0;
    let i;
    do { i = Math.floor(Math.random() * list.length); }
    while (i === prevIndex);
    return i;
  }

  function swapFavicon(href) {
    const link = document.createElement("link");
    link.rel = "icon";
    link.type = "image/jpeg"; // browsers accept even if .png/.webp
    link.href = href;
    if (faviconLink && faviconLink.parentNode) {
      faviconLink.parentNode.replaceChild(link, faviconLink);
    } else {
      document.head.appendChild(link);
    }
  }

  (async function init() {
    let files = await listViaIndex();
    if (files.length === 0) files = await listViaProbing();
    if (files.length === 0) files = ["me01.jpg", "me02.jpg", "me03.jpg", "me04.jpg", "me05.jpg", "me06.jpg"];

    files = Array.from(new Set(files)).sort();

    const prev = parseInt(localStorage.getItem(storageKey) || "-1", 10);
    const index = pickIndex(files, isNaN(prev) ? -1 : prev);
    if (index >= 0) localStorage.setItem(storageKey, String(index));

    const chosen = basePath + files[Math.max(0, index)];
    if (avatar) {
      avatar.src = chosen;
      avatar.srcset = "";
    }
    swapFavicon(chosen);
  })();
})();
