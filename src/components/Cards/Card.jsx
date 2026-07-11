import { Link } from "react-router";
import Heading3 from "../UI/Heading/Heading3";
import Tag from "../UI/Tag/Tag";

function Card({ data }) {
  const { bookId, image, bookName, author, tags, category, rating } = data;
  return (
    <Link to={`/details/${bookId}`}>
      <section className="p-6 border border-[#13131326] rounded-2xl shadow-lg">
        <figure className="mb-6 bg-[#F3F3F3] rounded-2xl p-8">
          <img
            className="w-32 h-44 mx-auto object-cover shadow-xl"
            src={image}
            alt={`cover-${bookName}`}
          />
        </figure>
        <section className="mb-4 flex items-center gap-3">
          {tags.map((each, idx) => (
            <Tag key={idx} text={each} colorHex={"#23BE0A"} bgHex={"#F3F3F3"} />
          ))}
        </section>
        <Heading3 text={bookName} />
        <p className="mt-4 font-primary font-medium text-[#131313CC]">
          By : {author}
        </p>
        <hr className="mt-5 border border-dashed text-[#13131326]" />
        <section className="mt-5 font-primary font-medium text-[#131313CC] flex items-center justify-between">
          <p className="">{category}</p>
          <section className="flex items-center gap-2">
            <p>{rating}</p>
            <i className="fa-regular fa-star"></i>
          </section>
        </section>
      </section>
    </Link>
  );
}

export default Card;
