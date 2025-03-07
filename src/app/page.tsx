import Banner from "@/components/banner/banner"
import ProductCardSmall from "@/components/cards/product/small"

function Homepage() {
  return (
    <main>
      {/* banner section */}
      {/* <section className="h-[720px] flex items-center justify-center">
        <Banner />
      </section> */}

      {/* products section */}
      <section>
        <main className="container mx-auto grid grid-cols-4 gap-8">
          {/* product cards */}
          <ProductCardSmall />
          <ProductCardSmall />
          <ProductCardSmall />
          <ProductCardSmall />
        </main>
      </section>
    </main>
  )
}

export default Homepage