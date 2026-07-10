import { Link } from "react-router";
import Heading2 from "../UI/Heading/Heading2";

function Card({ data }) {
  const { bookId, image, bookName } = data;
  return (
    <Link to={`/details/${bookId}`}>
      <section className="p-6 border border-[#13131326] rounded-2xl">
        <figure className="bg-[#F3F3F3] rounded-2xl p-8">
          <img
            className="w-32 h-44 mx-auto object-cover"
            src={image}
            alt="book-image"
          />
        </figure>
        <Heading2 text={bookName} />
      </section>
    </Link>
  );
}

export default Card;
