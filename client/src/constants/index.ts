import { carousel1, carousel2, carousel3, carousel4 } from "@/assets";
const navItems = [
  { name: "Home", url: "/" },
  { name: "Hotels", url: "#hotels" },
  { name: "Countries", url: "#countries" },
  { name: "Testimonials", url: "#testimonials" },
];
export const flightClasses = [
  { name: "Economy", value: "eco" },
  { name: "Premium Economy", value: "preEco" },
  { name: "Business class", value: "business" },
  { name: "First class", value: "first" },
];

export const countryCarouselImages = [
  { id: "65f9aca67a1a0f2424ab74c6", imageSrc: carousel1.src },
  {
    id: "65faa4491d20264171e83c03",
    imageSrc:
      "https://www.timedoctor.com/blog/images/2022/02/average-salary-in-south-korea.jpg",
  },
  {
    id: "66067977f55c40a4c60b3f80",
    imageSrc:
      "https://www.celebritycruises.com/blog/content/uploads/2021/03/what-is-japan-known-for-mt-fuji-hero.jpg",
  },
  {
    id: "66067b2af55c40a4c60b3f86",
    imageSrc:
      "https://www.state.gov/wp-content/uploads/2023/07/shutterstock_245773270v2.jpg",
  },
];
const carouselImages = [carousel1, carousel2, carousel3, carousel4];
export { navItems, carouselImages };
