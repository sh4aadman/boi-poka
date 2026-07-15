import { Link } from "react-router";

function Error() {
  return (
    <section className="w-5/6 mx-auto mt-32 font-secondary text-[#131313]">
      <h1 className="mb-32 text-5xl">
        Error 404 : Requested page is not there!
      </h1>
      <p className="text-2xl">
        Back to{" "}
        <span className="underline">
          <Link to={"/"}>Home</Link>
        </span>
      </p>
    </section>
  );
}

export default Error;
