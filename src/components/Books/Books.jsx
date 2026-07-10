import { Suspense } from "react";
import CardContainer from "../Cards/CardContainer";
import Heading2 from "../UI/Heading/Heading2";

function Books({ data }) {
  return (
    <section>
      <Heading2 align={"center"} text={"Books"} />
      <Suspense
        fallback={
          <span className="mt-10 text-center loading loading-dots loading-xl"></span>
        }
      >
        <CardContainer data={data} />
      </Suspense>
    </section>
  );
}

export default Books;
