const images = document.querySelector(".images");

const singles = [
  {
    image: "/images/Singles/1.jpg",
  },
  {
    image: "/images/Singles/2.jpg",
  },
  {
    image: "/images/Singles/3.jpg",
  },
  {
    image: "/images/Singles/4.jpg",
  },
  {
    image: "/images/Singles/5.jpg",
  },
  {
    image: "/images/Singles/6.jpg",
  },
  {
    image: "/images/Singles/7.jpg",
  },
  {
    image: "/images/Singles/8.jpg",
  },
  {
    image: "/images/Singles/9.jpg",
  },
  {
    image: "/images/Singles/10.jpg",
  },
  {
    image: "/images/Singles/11.jpg",
  },
  {
    image: "/images/Singles/12.jpg",
  },
  {
    image: "/images/Singles/13.jpg",
  },
  {
    image: "/images/Singles/14.jpg",
  },
  {
    image: "/images/Singles/15.jpg",
  },
  {
    image: "/images/Singles/16.jpg",
  },
  {
    image: "/images/Singles/17.jpg",
  },
  {
    image: "/images/Singles/18.jpg",
  },

  {
    image: "/images/Singles/20.jpg",
  },
  {
    image: "/images/Singles/21.jpg",
  },
  {
    image: "/images/Singles/22.jpg",
  },
  {
    image: "/images/Singles/23.jpg",
  },
  {
    image: "/images/Singles/24.jpg",
  },
  {
    image: "/images/Singles/25.jpg",
  },
  {
    image: "/images/Singles/26.jpg",
  },
  {
    image: "/images/Singles/27.jpg",
  },
  {
    image: "/images/Singles/28.jpg",
  },
  {
    image: "/images/Singles/29.jpg",
  },
  {
    image: "/images/Singles/30.jpg",
  },
  {
    image: "/images/Singles/31.jpg",
  },
  {
    image: "/images/Singles/32.jpg",
  },
  {
    image: "/images/Singles/34.jpg",
  },
  {
    image: "/images/Singles/35.jpg",
  },
  {
    image: "/images/Singles/36.jpg",
  },
  {
    image: "/images/Singles/37.jpg",
  },
  {
    image: "/images/Singles/38.jpg",
  },
  {
    image: "/images/Singles/39.jpg",
  },
  {
    image: "/images/Singles/40.jpg",
  },
  {
    image: "/images/Singles/41.jpg",
  },
  {
    image: "/images/Singles/42.jpg",
  },
  {
    image: "/images/Singles/43.jpg",
  },
  {
    image: "/images/Singles/44.jpg",
  },
  {
    image: "/images/Singles/45.jpg",
  },
  {
    image: "/images/Singles/46.jpg",
  },
];

function createImageElement(src) {
  const img = document.createElement("img");
  img.src = src;
  img.classList.add("imuge");

  img.addEventListener("click", () => {
    showFullscreenImage(src);
  });

  images.appendChild(img);
}

function showFullscreenImage(src) {
  const fullscreenDiv = document.createElement("div");
  fullscreenDiv.classList.add("fullscreen");

  const fullscreenImg = document.createElement("img");
  fullscreenImg.src = src;

  fullscreenDiv.addEventListener("click", () => {
    document.body.removeChild(fullscreenDiv);
  });

  fullscreenDiv.appendChild(fullscreenImg);
  document.body.appendChild(fullscreenDiv);
}

singles.forEach((item) => createImageElement(item.image));
