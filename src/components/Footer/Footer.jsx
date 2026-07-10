import { currentYear } from "../../utils/getDate";

function Footer() {
  return (
    <>
      <footer className="py-4 text-center font-primary text-sm text-[#131313] bg-[#F3F3F3]">
        {currentYear} - All rights reserved
      </footer>
    </>
  );
}

export default Footer;
