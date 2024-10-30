const images = document.querySelector(".images");

const general = [
  {
    image: "images/General/1.jpg",
  },
  {
    image: "images/General/2.jpg",
  },
  {
    image: "images/General/3.jpg",
  },
  {
    image: "images/General/4.jpg",
  },
  {
    image: "images/General/5.jpg",
  },
  {
    image: "images/General/6.jpg",
  },
  {
    image: "images/General/7.jpg",
  },
  {
    image: "images/General/8.jpg",
  },
  {
    image: "images/General/9.jpg",
  },
  {
    image: "images/General/10.jpg",
  },
  {
    image: "images/General/11.jpg",
  },
  {
    image: "images/General/12.jpg",
  },
];
const singles = [
  {
    image: "images/Singles/1.jpg",
  },
  {
    image: "images/Singles/2.jpg",
  },
  {
    image: "images/Singles/3.jpg",
  },
  {
    image: "images/Singles/4.jpg",
  },
  {
    image: "images/Singles/5.jpg",
  },
  {
    image: "images/Singles/6.jpg",
  },
  {
    image: "images/Singles/7.jpg",
  },
  {
    image: "images/Singles/8.jpg",
  },
  {
    image: "images/Singles/9.jpg",
  },
  {
    image: "images/Singles/10.jpg",
  },
  {
    image: "images/Singles/11.jpg",
  },
  {
    image: "images/Singles/12.jpg",
  },
  {
    image: "images/Singles/13.jpg",
  },
  {
    image: "images/Singles/14.jpg",
  },
  {
    image: "images/Singles/15.jpg",
  },
  {
    image: "images/Singles/16.jpg",
  },
  {
    image: "images/Singles/17.jpg",
  },
  {
    image: "images/Singles/18.jpg",
  },
  {
    image: "images/Singles/20.jpg",
  },
  {
    image: "images/Singles/21.jpg",
  },
  {
    image: "images/Singles/22.jpg",
  },
  {
    image: "images/Singles/23.jpg",
  },
  {
    image: "images/Singles/24.jpg",
  },
  {
    image: "images/Singles/25.jpg",
  },
  {
    image: "images/Singles/26.jpg",
  },
  {
    image: "images/Singles/27.jpg",
  },
  {
    image: "images/Singles/28.jpg",
  },
  {
    image: "images/Singles/29.jpg",
  },
  {
    image: "images/Singles/30.jpg",
  },
  {
    image: "images/Singles/31.jpg",
  },
  {
    image: "images/Singles/32.jpg",
  },
  {
    image: "images/Singles/34.jpg",
  },
  {
    image: "images/Singles/35.jpg",
  },
  {
    image: "images/Singles/36.jpg",
  },
  {
    image: "images/Singles/37.jpg",
  },
  {
    image: "images/Singles/38.jpg",
  },
  {
    image: "images/Singles/39.jpg",
  },
  {
    image: "images/Singles/40.jpg",
  },
  {
    image: "images/Singles/41.jpg",
  },
  {
    image: "images/Singles/42.jpg",
  },
  {
    image: "images/Singles/43.jpg",
  },
  {
    image: "images/Singles/44.jpg",
  },
  {
    image: "images/Singles/45.jpg",
  },
  {
    image: "images/Singles/46.jpg",
  },
  {
    image: "images/Singles/47.jpg",
  },
  {
    image: "images/Singles/48.jpg",
  },
  {
    image: "images/Singles/49.jpg",
  },
  {
    image: "images/Singles/50.jpg",
  },
  {
    image: "images/Singles/51.jpg",
  },
  {
    image: "images/Singles/52.jpg",
  },
  {
    image: "images/Singles/53.jpg",
  },
  {
    image: "images/Singles/54.jpg",
  },
  {
    image: "images/Singles/55.jpg",
  },
  {
    image: "images/Singles/56.jpg",
  },
  {
    image: "images/Singles/57.jpg",
  },
  {
    image: "images/Singles/58.jpg",
  },
  {
    image: "images/Singles/59.jpg",
  },
  {
    image: "images/Singles/60.jpg",
  },
  {
    image: "images/Singles/61.jpg",
  },
  {
    image: "images/Singles/62.jpg",
  },
  {
    image: "images/Singles/63.jpg",
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

general.forEach((item) => createImageElement(item.image));

singles.forEach((item) => createImageElement(item.image));
