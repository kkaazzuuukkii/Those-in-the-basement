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
