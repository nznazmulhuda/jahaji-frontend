import Brand from "./ui/brand"
import Buttons from "./ui/buttons"
import Links from "./ui/links"
import Search from "./ui/search"

function Navbar() {
  return (
    <header className="bg-white shadow-xl rounded-b-3xl mb-6 py-3 sticky top-0 z-50">
      <nav className="container mx-auto flex items-center justify-between">
        {/* left side */}
        <aside className="flex items-center gap-12">
          {/* brand */}
          <Brand />

          {/* nav links */}
          <Links />
        </aside>

        {/* right side */}
        <aside className="flex items-center gap-4">
          {/* item search bar */}
          <Search />

          {/* extra links */}
          <Buttons />
        </aside>
      </nav>
    </header>
  )
}

export default Navbar 