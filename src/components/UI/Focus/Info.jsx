function Info({ text, icon }) {
  return (
    <section className="text-[#13131399] flex items-center gap-1.5">
      {icon}
      <p className="font-primary">{text}</p>
    </section>
  );
}

export default Info;
