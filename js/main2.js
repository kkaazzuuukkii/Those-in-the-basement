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
    image: "/images/Singles/19.jpg",
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
];

for (let i = 0; i < singles.length; i++) {
  const img1 = document.createElement("img");
  images.appendChild(img1);
  img1.src = singles[i].image;
  img1.classList.add("imuge");
}
