import Image from "next/image"
import BrandImage from "@/assets/logo.svg"

function Brand() {
  return (
    <Image
      src={BrandImage}
      alt="Brand Image"
    />
  )
}

export default Brand