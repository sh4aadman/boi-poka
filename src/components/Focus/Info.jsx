function Info({ text, icon }) {
  return (
    <section className="flex items-center gap-0.5">
      {icon}
      <p className="font-primary text-[#131313CC]">{text}</p>
    </section>
  );
}

export default Info;
