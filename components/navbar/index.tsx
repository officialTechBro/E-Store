import { Suspense } from "react"
import Container from "../global/container"
import CartButton from "./cart-button"
import DarkMode from "./dark-mode"
import LinksDropdown from "./links-dropdown"
import Logo from "./logo"
import NavSearch from "./nav-search"

const Navbar = () => {
  return (
    <nav className="border-b">
      <Container className="flex flex-col sm:flex-row sm:justify-between sm:items-center flex-wrap gap-4 py-8">
        <Logo />
        <Suspense>
          <NavSearch />
        </Suspense>
        <div className="flex gap-4 items-center">
          <CartButton />
          <DarkMode />
          <LinksDropdown />
        </div>
      </Container>
    </nav>
  )
}
export default Navbar