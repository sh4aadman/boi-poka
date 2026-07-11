import { Outlet } from "react-router";
import NavBar from "../components/Header/NavBar";
import Home from "../pages/Home/Home";
import Footer from "../components/Footer/Footer";

function MainLayout() {
  return (
    <>
      <div className="w-5/6 mx-auto mb-32">
        <NavBar />
        <Outlet>
          <Home />
        </Outlet>
      </div>
      <Footer />
    </>
  );
}

export default MainLayout;
