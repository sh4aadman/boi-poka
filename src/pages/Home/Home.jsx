import Title from "../../components/Title/Title";
import Heading1 from "../../components/Heading/Heading1";
import Heading2 from "../../components/Heading/Heading2";
import Heading3 from "../../components/Heading/Heading3";
import PrimaryButton from "../../components/Button/PrimaryButton";
import HeaderLink from "../../components/Link/HeaderLink";
import Tag from "../../components/Tag/Tag";
import SecondaryButton from "../../components/Button/SecondaryButton";
import Paragraph from "../../components/Paragraph/Paragraph";
import Focus from "../../components/Focus/Focus";
import Details from "../../components/Focus/Details";
import Info from "../../components/Focus/Info";

function Home() {
  const icon = <i className="fa-solid fa-location-dot text-[#131313CC]"></i>

  return (
    <div>
      <Title text={"Book Vibe"} />
      <HeaderLink text={"text"} />
      <PrimaryButton text={"Sign In"} colorHex={"#FFFFFF"} bgHex={"#23BE0A"} />
      <Heading1 text={"text"} colorHex={"#131313"} />
      <Heading2 text={"text"} colorHex={"#131313"} />
      <Heading3 text={"text"} colorHex={"#131313"} />
      <Tag text={"text"} colorHex={"#23BE0A"} bgHex={"#F3F3F3"} />
      <SecondaryButton text={"text"} colorHex={"#328EFF"} bgHex={"#328EFF26"} />
      <Paragraph text={"text"} />
      <Focus text={"text"} />
      <Details text={"text"} />
      <Info text={"text"} icon={icon} />
    </div>
  );
}

export default Home;
