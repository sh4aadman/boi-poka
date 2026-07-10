import PrimaryButton from "../UI/Button/PrimaryButton";
import HeaderLink from "../UI/Link/HeaderLink";
import Title from "../UI/Title/Title";

function NavBar() {
  return (
    <nav className="w-5/6 mx-auto mt-5 mb-10 flex items-center justify-between">
      <Title text={"Book Vibe"} />
      <section>
        <ul className="flex items-center gap-4">
          <HeaderLink text={"Home"} />
          <HeaderLink text={"Listed Books"} />
          <HeaderLink text={"Pages to Read"} />
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
