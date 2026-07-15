import { Link } from "react-router";
import SecondaryButton from "../UI/Button/SecondaryButton";
import Focus from "../UI/Focus/Focus";
import Info from "../UI/Focus/Info";
import Heading3 from "../UI/Heading/Heading3";
import Tag from "../UI/Tag/Tag";

function Tile({ book }) {
  const {
    bookId,
    image,
    bookName,
    author,
    tags,
    year,
    publisher,
    pages,
    category,
    rating,
  } = book;

  const locationIcon = <i className="fa-solid fa-location-dot"></i>;
  const peopleIcon = <i className="fa-solid fa-users"></i>;
  const pageIcon = <i className="fa-regular fa-file-lines"></i>;

  return (
    <section className="my-4 p-6 border border-[#13131326] rounded-2xl flex items-start lg:items-center gap-8">
      <figure className="px-12 py-7 rounded-2xl bg-[#F3F3F3]">
        <img
          className="w-32 rounded-2xl object-cover shadow-xl"
          src={image}
          alt={`cover-${bookName}`}
        />
      </figure>
      <section className="grow">
        <Heading3 text={bookName} colorHex={"#131313"} />
        <p className="mt-4 font-primary font-medium text-sm lg:text-xl text-[#131313CC]">
          By : {author}
        </p>
        <section className="mt-4 flex flex-col lg:flex-row items-start lg:items-center gap-2 lg:gap-4">
          <Focus text={"Tag"} />
          {tags.map((tag, idx) => (
            <Tag key={idx} text={tag} colorHex={"#23BE0A"} bgHex={"#F3F3F3"} />
          ))}
          <Info text={`Year of Publishing: ${year}`} icon={locationIcon} />
        </section>
        <section className="mt-4 flex flex-col lg:flex-row lg:items-center gap-4">
          <Info text={`Publisher: ${publisher}`} icon={peopleIcon} />
          <Info text={`Pages: ${pages}`} icon={pageIcon} />
        </section>
        <hr className="my-4 w-full text-[#13131326]" />
        <section className="flex flex-col lg:flex-row items-start lg:items-center gap-3">
          <SecondaryButton
            text={`Category: ${category}`}
            colorHex={"#328EFF"}
            bgHex={"#328EFF26"}
          />
          <SecondaryButton
            text={`Rating: ${rating}`}
            colorHex={"#FFAC33"}
            bgHex={"#FFAC3326"}
          />
          <Link to={`/details/${bookId}`}>
            <SecondaryButton
              text={"View Details"}
              colorHex={"#FFFFFF"}
              bgHex={"#23BE0A"}
            />
          </Link>
        </section>
      </section>
    </section>
  );
}

export default Tile;
