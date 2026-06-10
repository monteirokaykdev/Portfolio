import CardExperiencia from "./CardExperiencia";

function Experiencias() {
  const experiencias = [
    {
      cargo: "Desenvolvedor Backend",
      empresa: "Projeto Pokémon Battle",
      periodo: "2026",
      descricao: "Sistema de batalha usando Java, classes, enums e orientação a objetos."
    },
    {
      cargo: "Desenvolvedor Full Stack",
      empresa: "Projeto CRUD",
      periodo: "2026",
      descricao: "Aplicação com React no front-end e Spring Boot no back-end."
    },
    {
    cargo: "Desenvolvedor Front-End",
    empresa: "Portfolio React",
    periodo: "2026",
    descricao: "Desenvolvimento de um portfólio responsivo utilizando React, Tailwind CSS e componentização."
    },
    {
    cargo: "Desenvolvedor Banco de Dados",
    empresa: "Projeto Consultas SQL",
    periodo: "2026",
    descricao: "Modelagem de banco de dados, consultas SQL avançadas, álgebra relacional e otimização com índices."
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {experiencias.map((exp, index) => (
        <CardExperiencia
          key={index}
          cargo={exp.cargo}
          empresa={exp.empresa}
          periodo={exp.periodo}
          descricao={exp.descricao}
        />
      ))}
    </div>
  );
}

export default Experiencias;