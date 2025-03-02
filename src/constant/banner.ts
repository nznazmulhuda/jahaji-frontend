import BannerOne from "@/assets/banner/banner-1.jpg"
import BannerTwo from "@/assets/banner/banner-2.jpg"
import BannerThree from "@/assets/banner/banner-3.jpg"

const bannerData: { title: string, description: string, image: string, isLeftToRight: boolean }[] = [
  {
    title: "A little text about the collection of the brightest products",
    description: "Discover our selection of the most popular and trendy products, crafted by the world's brightest minds.",
    image: BannerOne.src,
    isLeftToRight: true,
  },
  {
    title: "A little text about the collection of the brightest products",
    description: "Discover our selection of the most popular and trendy products, crafted by the world's brightest minds.",
    image: BannerTwo.src,
    isLeftToRight: false,
  },
  {
    title: "A little text about the collection of the brightest products",
    description: "Discover our selection of the most popular and trendy products, crafted by the world's brightest minds.",
    image: BannerThree.src,
    isLeftToRight: true,
  },
]

export default bannerData