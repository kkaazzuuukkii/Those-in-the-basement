const images = document.querySelector(".images");

const general = [
  {
    image: "/images/General/1.jpg",
  },
  {
    image: "/images/General/2.jpg",
  },
  {
    image: "/images/General/3.jpg",
  },
  {
    image: "/images/General/4.jpg",
  },
  {
    image: "/images/General/5.jpg",
  },
  {
    image: "/images/General/6.jpg",
  },
  {
    image: "/images/General/7.jpg",
  },
  {
    image: "/images/General/8.jpg",
  },
  {
    image: "/images/General/9.jpg",
  },
  {
    image: "/images/General/10.jpg",
  },
  {
    image: "/images/General/11.jpg",
  },
  {
    image: "/images/General/12.jpg",
  },
  {
    image: "/images/General/13.jpg",
  },
  {
    image: "/images/General/14.jpg",
  },
  {
    image: "/images/General/15.jpg",
  },
  {
    image: "/images/General/16.jpg",
  },
  {
    image: "/images/General/17.jpg",
  },
  {
    image: "/images/General/18.jpg",
  },
  {
    image: "/images/General/19.jpg",
  },
  {
    image: "/images/General/20.jpg",
  },
  {
    image: "/images/General/21.jpg",
  },
  {
    image: "/images/General/22.jpg",
  },
];

for (let i = 0; i < general.length; i++) {
  const img = document.createElement("img");
  images.appendChild(img);
  img.src = general[i].image;
  img.classList.add("imuge");
}