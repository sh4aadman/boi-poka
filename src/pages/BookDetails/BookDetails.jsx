import { useLoaderData, useParams } from "react-router";
import Heading2 from "../../components/UI/Heading/Heading2";
import Focus from "../../components/UI/Focus/Focus";
import Tag from "../../components/UI/Tag/Tag";
import Details from "../../components/UI/Focus/Details";
import PrimaryButton from "../../components/UI/Button/PrimaryButton";
import { setReadlistToStorage } from "../../utils/addToReadlist";
import { setWishlistToStorage } from "../../utils/addToWishlist";
import toast, { Toaster } from "react-hot-toast";

function BookDetails() {
  const { id } = useParams();
  const bookId = parseInt(id);
  const books = useLoaderData();

  const book = books.find((book) => book.bookId === bookId);

  const {
    bookName,
    author,
    category,
    review,
    tags,
    pages,
    publisher,
    year,
    rating,
    image,
  } = book;

  const handleRead = (id) => {
    const added = setReadlistToStorage(id);
    if (added) {
      toast(`${bookName} - by ${author} is added to read-list!`);
    } else {
      toast("Book already added to read-list!");
    }
  };

  const handleWishlist = (id) => {
    const added = setWishlistToStorage(id);
    if (added) {
      toast(`${bookName} - by ${author} is added to wish-list!`);
    } else {
      toast("Book already added to wish-list!");
    }
  };

  return (
    <section className="flex gap-4 lg:gap-12">
      <title>{`${bookName} - by ${author}`}</title>
      <figure className="p-4 lg:p-24 h-fit rounded-2xl bg-[#F3F3F3]">
        <img
          className="w-md h-125 rounded-2xl object-cover shadow-xl"
          src={image}
          alt={`cover-${bookName}`}
        />
      </figure>
      <section className="w-1/2 grow">
        <Heading2 text={bookName} />
        <p className="mt-4 mb-6 font-primary font-medium text-xl text-[#131313CC]">
          By : {author}
        </p>
        <hr className="w-full text-[#13131326]" />
        <p className="my-4 font-primary font-medium text-xl text-[#131313CC]">
          {category}
        </p>
        <hr className="w-full mb-6 text-[#13131326]" />
        <Focus text={"Review : "} />
        {review.split("\n\n").map((parapgraph, idx) => {
          return idx === 0 ? (
            <span key={idx} className="font-primary text-[#131313F3] leading-7">
              {parapgraph}
            </span>
          ) : (
            <span
              key={idx}
              className="block font-primary text-[#131313F3] leading-7"
            >
              {parapgraph}
            </span>
          );
        })}
        <section className="mt-6 flex items-center gap-4">
          <Focus text={"Tag"} />
          {tags.map((tag, idx) => (
            <Tag key={idx} text={tag} colorHex={"#23BE0A"} bgHex={"#F3F3F3"} />
          ))}
        </section>
        <hr className="w-full my-6 text-[#13131326]" />
        <section className="mb-8 flex items-center gap-14">
          <section className="space-y-3 font-primary text-[#131313B3] leading-7">
            <p>Number of Pages :</p>
            <p>Publisher :</p>
            <p>Year of Publishing :</p>
            <p>Rating :</p>
          </section>
          <section className="space-y-3">
            <Details text={pages} />
            <Details text={publisher} />
            <Details text={year} />
            <Details text={rating} />
          </section>
        </section>
        <section className="flex items-center gap-4">
          <PrimaryButton
            onClick={() => handleRead(bookId)}
            text={"Read"}
            colorHex={"#131313"}
            bgHex={"#FFFFFF"}
            borderColor={"#1313134D"}
          />
          <PrimaryButton
            onClick={() => handleWishlist(bookId)}
            text={"Wishlist"}
            colorHex={"#FFFFFF"}
            bgHex={"#50B1C9"}
          />
        </section>
      </section>
      <Toaster
        toastOptions={{
          className: "font-primary",
          style: {
            color: "#FFFFFF",
            backgroundColor: "#59C6D2",
          },
        }}
      />
    </section>
  );
}

export default BookDetails;
