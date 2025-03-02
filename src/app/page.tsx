import Banner from "@/components/banner/banner"

function Homepage() {
  return (
    <main>
      {/* banner section */}
      <section className="h-[720px] flex items-center justify-center">
        <Banner />
      </section>
    </main>
  )
}

export default Homepage