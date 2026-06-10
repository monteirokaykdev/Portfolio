function CardExperiencia({ cargo, empresa, periodo, descricao }) {
  return (
    <article className="bg-white p-6 rounded-xl shadow-md border border-black hover:scale-105 transition">
      <h3 className="text-xl font-bold text-slate-800">
        {cargo}
      </h3>

      <p className="text-blue-600 font-semibold mt-2">
        {empresa}
      </p>

      <p className="text-sm text-slate-500 mt-1">
        {periodo}
      </p>

      <p className="text-slate-700 mt-4">
        {descricao}
      </p>
    </article>
  );
}

export default CardExperiencia;