import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"
import { AddToCartButton, WishlistButton } from "./buttons"
import { TProduct } from "@/schemas/product.interface"
import ProductPreview from "@/components/dialogs/productPreview"


function ProductCardSmall({ product }: { product: TProduct }) {
  return (
    <Card className="border border-[#F1F1F1] rounded-[8px] bg-white p-4 gap-3">
      <CardHeader className="p-0 relative">
        {/* product label */}
        <CardTitle className="absolute top-5 left-4">
          <button className="border border-[#E2E3E6] bg-[#F1F1F1] text-black px-1.5 py-0.5 rounded-[6px] text-[12px] font-normal">
            {product.brand}
          </button>
        </CardTitle>

        {/* product image */}
        <div className="w-full flex items-center justify-center bg-[#F6F6F6] rounded-[4px]">
          <Image
            priority
            alt={product.name}
            width={248}
            height={220}
            src={product.coverImage}
            className="rounded-[4px]"
          />
        </div>
      </CardHeader>

      <CardContent className="p-0">
        {/* price */}
        <h5
          style={{
            letterSpacing: -0.4
          }}
          className="text-black font-medium text-[14px] leading-[22px] mb-1">
          {product.price}
        </h5>

        <CardDescription
          style={{
            letterSpacing: -0.5
          }}
          className="text-[#707378] font-medium text-[16px] leading-[24px]"
        >
          {product.name}
        </CardDescription>
      </CardContent>

      <Separator className="bg-[#E2E3E6]" />


      <CardFooter className="p-0 space-x-2">
        {/* wishlist button */}
        <WishlistButton productId={product._id} />

        {/* add to cart button */}
        {/* <AddToCartButton productId={product._id} /> */}
        <ProductPreview />
      </CardFooter>
    </Card>

  )
}

export default ProductCardSmall