import Banner from "@/components/banner/banner"
import Products from "@/components/products/products"

function Homepage() {

  return (
    <main>
      {/* banner section */}
      <section className="h-[720px] flex items-center justify-center">
        <Banner />
      </section>

      {/* products section */}
      <section className="mt-10">
        <Products />
      </section>
    </main>
  )
}

export default Homepage