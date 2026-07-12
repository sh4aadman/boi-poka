import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getReadlist } from "../../utils/addToReadlist";
import Tile from "../../components/Tile/Tile";

function ListedBooks() {
  const data = useLoaderData();
  const list = getReadlist();
  const readlist = data.filter((each) => list.includes(each.bookId));

  return (
    <>
      <h2 className="py-9 mb-8 font-primary font-bold text-3xl text-center rounded-3xl bg-[#F3F3F3]">
        Books
      </h2>
      {/* DaisyUI - Dropdown Button */}
      <div className="dropdown dropdown-start mb-14 flex justify-center">
        <div
          tabIndex={0}
          role="button"
          className="px-4 py-3 border font-primary font-bold text-[#FFFFFF] rounded-lg bg-[#23BE0A]"
        >
          Sort By <i className="fa-solid fa-angle-down"></i>
        </div>
        <ul
          tabIndex="-1"
          className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
        >
          <li>
            <a>Rating</a>
          </li>
          <li>
            <a>Number of pages</a>
          </li>
          <li>
            <a>Publisher year</a>
          </li>
        </ul>
      </div>
      <Tabs>
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>Wishlist Books</Tab>
        </TabList>

        {readlist.map((each) => (
          <TabPanel key={each.bookId}>
            <Tile book={each} />
          </TabPanel>
        ))}
              
      </Tabs>
    </>
  );
}

export default ListedBooks;
