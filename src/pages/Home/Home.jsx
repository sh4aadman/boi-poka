import { useLoaderData } from "react-router";
import Banner from "../../components/Banner/Banner";
import Books from "../../components/Books/Books";
import { Suspense } from "react";

function Home() {
  const data = useLoaderData();

  return (
    <>
      <Banner />
      <Suspense fallback={<span className="mt-10 text-center loading loading-dots loading-xl"></span>}>
        <Books data={data} />
      </Suspense>
    </>
  );
}

export default Home;
