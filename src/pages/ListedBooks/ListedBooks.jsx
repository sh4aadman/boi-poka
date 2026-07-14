import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getReadlistFromStorage } from "../../utils/addToReadlist";
import Tile from "../../components/Tile/Tile";
import { getWishlistFromStorage } from "../../utils/addToWishlist";
import { useState } from "react";

function ListedBooks() {
  const [type, setType] = useState("");

  const data = useLoaderData();
  const readlistFromStorage = getReadlistFromStorage();
  const readlistData = data.filter((each) =>
    readlistFromStorage.includes(each.bookId),
  );

  const wishlistFromStorage = getWishlistFromStorage();
  const wishlistData = data.filter((each) =>
    wishlistFromStorage.includes(each.bookId),
  );

  const sortedBooks = (books) => {
    const sorted = books;

    switch (type) {
      case "rating":
        sorted.sort((a, b) => a.rating - b.rating);
        break;
      case "pages":
        sorted.sort((a, b) => a.pages - b.pages);
        break;
      case "year":
        sorted.sort((a, b) => a.year - b.year);
        break;
    }

    return sorted;
  };

  const sortedReadlist = sortedBooks(readlistData);
  const sortedWishlist = sortedBooks(wishlistData);

  const handleSort = (type) => {
    setType(type);
  };

  return (
    <>
      <h2 className="py-9 mb-8 font-primary font-bold text-3xl text-center rounded-3xl bg-[#F3F3F3]">
        Books
      </h2>
      {/* DaisyUI - Dropdown Button */}
      <div className="dropdown mb-14 flex justify-center">
        <div
          tabIndex={0}
          role="button"
          className="px-4 py-3 border font-primary font-bold text-[#FFFFFF] rounded-lg bg-[#23BE0A]"
        >
          Sort By <i className="fa-solid fa-angle-down"></i>
        </div>
        <ul
          tabIndex="-1"
          className="dropdown-content menu mt-12 rounded-box z-1 w-40 p-2 shadow-sm font-primary leading-7 text-[#131313CC] bg-[#F3F3F3]"
        >
          <li onClick={() => handleSort("rating")}>
            <a>Rating</a>
          </li>
          <li onClick={() => handleSort("pages")}>
            <a>Number of pages</a>
          </li>
          <li onClick={() => handleSort("year")}>
            <a>Publisher year</a>
          </li>
        </ul>
      </div>
      <Tabs>
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>Wishlist Books</Tab>
        </TabList>

        <TabPanel>
          {sortedReadlist.map((each) => (
            <Tile key={each.bookId} book={each} />
          ))}
        </TabPanel>
        <TabPanel>
          {sortedWishlist.map((each) => (
            <Tile key={each.bookId} book={each} />
          ))}
        </TabPanel>
      </Tabs>
    </>
  );
}

export default ListedBooks;
