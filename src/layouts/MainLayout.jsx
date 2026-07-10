import { Outlet } from "react-router"
import NavBar from "../components/Header/NavBar"
import Home from "../pages/Home/Home"
import Footer from "../components/Footer/Footer"

function MainLayout() {
  return (
      <>
          <NavBar />
          <Outlet>
              <Home />
          </Outlet>
          <Footer />
      </>
  )
}

export default MainLayout
