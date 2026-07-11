import { use } from "react";
import Card from "./Card";
import { dataPromise } from "../../utils/getData";
// import dataPromise from "../../utils/getData";
// import getData from "../../utils/getData";

function CardContainer() {
  const data = use(dataPromise);

  return (
    <section className="mt-10 grid grid-cols-3 gap-6">
      {data.map((each) => (
        <Card key={each.bookId} data={each} />
      ))}
    </section>
  );
}

export default CardContainer;
