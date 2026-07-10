import { Suspense } from "react";
import CardContainer from "../Cards/CardContainer";
import Heading2 from "../UI/Heading/Heading2";
import Loading from "../UI/Loading/Loading";

function Books() {
  return (
    <section>
      <Heading2 align={"center"} text={"Books"} />
      <Suspense fallback={<Loading />}>
        <CardContainer />
      </Suspense>
    </section>
  );
}

export default Books;
