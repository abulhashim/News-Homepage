import bannerDesktop from "./assets/images/image-web-3-desktop.jpg";
import bannerMobile from "./assets/images/image-web-3-mobile.jpg";
import imgGamingGrowth from "./assets/images/image-gaming-growth.jpg";
import imgTopLaptops from "./assets/images/image-top-laptops.jpg";
import imgRetroPcs from "./assets/images/image-retro-pcs.jpg";

export const popularNews = [
  {
    id: 1,
    title: "The Bright Future of Web 3.0?",
    description: ` We dive into the next evolution of the web that claims to put the
    power of the platforms back into the hands of the people. But is it
    really fulfilling its promise? `,
    imgForDesktop: bannerDesktop,
    imgForMobile: bannerMobile,
  },
];

export const newNews = [
  {
    id: 1,
    title: "Hydrogen VS Electric Cars",
    description: "Will hydrogen-fueled cars ever catch up to EVs?",
  },
  {
    id: 2,
    title: "The Downsides of AI Artistry",
    description:
      "What are the possible adverse effects of on-demand AI image generation?",
  },
  {
    id: 3,
    title: "Is VC Funding Drying Up?",
    description:
      "Private funding by VC firms is down 50% YOY. We take a look at what that means.",
  },
];

export const trendingNewsData = [
  {
    id: 1,
    trendingNo: "01",
    title: "Reviving Retro PCs",
    description: "What happens when old PCs are given modern upgrades?",
    img: imgRetroPcs,
  },
  {
    id: 2,
    trendingNo: "02",
    title: "Top 10 Laptops of 2022",
    description: "Our best picks for various needs and budgets.",
    img: imgTopLaptops,
  },
  {
    id: 3,
    trendingNo: "03",
    title: "The Growth of Gaming",
    description: "How the pandemic has sparked fresh opportunities.",
    img: imgGamingGrowth,
  },
];
