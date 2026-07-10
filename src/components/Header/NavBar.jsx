import { Link } from "react-router";
import PrimaryButton from "../UI/Button/PrimaryButton";
import HeaderLink from "../UI/Link/HeaderLink";
import Title from "../UI/Title/Title";

function NavBar() {
  return (
    <nav className="mt-5 mb-10 flex items-center justify-between">
      <Title text={"Book Vibe"} />
      <section>
        <ul className="flex items-center gap-4">
          <Link to={"/"}>
            <HeaderLink text={"Home"} />
          </Link>
          <Link to={"/books"}>
            <HeaderLink text={"Listed Books"} />
          </Link>
          <Link to={"/pages-to-read"}>
            <HeaderLink text={"Pages to Read"} />
          </Link>
        </ul>
      </section>
      <section className="flex items-center gap-4">
        <PrimaryButton
          text={"Sign In"}
          colorHex={"#FFFFFF"}
          bgHex={"#23BE0A"}
        />
        <PrimaryButton
          text={"Sign Up"}
          colorHex={"#FFFFFF"}
          bgHex={"#59C6D2"}
        />
      </section>
    </nav>
  );
}

export default NavBar;
