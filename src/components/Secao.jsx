function Secao({ id, children }) {
  return (
    <section id={id} className="min-h-screen scroll-mt-24">
      {children}
    </section>
  );
}

export default Secao;