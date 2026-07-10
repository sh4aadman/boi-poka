import Card from "./Card";

function CardContainer({ data }) {
  return (
    <section className="mt-10 grid grid-cols-3 gap-6">
      {data.map((each) => (
        <Card key={each.bookId} data={each} />
      ))}
    </section>
  );
}

export default CardContainer;
