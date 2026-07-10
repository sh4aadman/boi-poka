import PrimaryButton from "../UI/Button/PrimaryButton";
import Heading1 from "../UI/Heading/Heading1";
import bookCover from "../../assets/book.webp";

function Banner() {
  return (
    <section className="mb-20 px-36 py-20 rounded-3xl flex items-center justify-between bg-[#F3F3F3]">
      <section className="w-2/5 space-y-12">
        <Heading1 text={"Books to freshen up your bookshelf"} />
        <PrimaryButton
          text={"View The List"}
          colorHex={"#FFFFFF"}
          bgHex={"#23BE0A"}
        />
      </section>
      <figure className="w-2/5">
        <img className="w-full mx-auto object-cover" src={bookCover} alt="book_cover" />
      </figure>
    </section>
  );
}

export default Banner;
