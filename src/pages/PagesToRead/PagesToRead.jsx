import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getReadlistFromStorage } from "../../utils/addToReadlist";
import { getWishlistFromStorage } from "../../utils/addToWishlist";
import Chart from "../../components/Chart/Chart";

function PagesToRead() {
  const data = useLoaderData();

  const readlistData = getReadlistFromStorage();
  const readlist = data.filter((each) => readlistData.includes(each.bookId));

  const wishlistData = getWishlistFromStorage();
  const wishlist = data.filter((each) => wishlistData.includes(each.bookId));

  return (
    <>
      <title>Book Vibe - Listed Books</title>
      <Tabs>
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>Wishlist Books</Tab>
        </TabList>

        <TabPanel>
          <Chart
            height={600}
            data={readlist}
            dataKeyX={"bookName"}
            dataKey={"pages"}
          />
        </TabPanel>
        <TabPanel>
          <Chart
            height={600}
            data={wishlist}
            dataKeyX={"bookName"}
            dataKey={"pages"}
          />
        </TabPanel>
      </Tabs>
    </>
  );
}

export default PagesToRead;
