import { FaGithubSquare, FaLinkedin, FaReact, FaJava } from "react-icons/fa";
import { SiGmail, SiSpringboot, SiMysql } from "react-icons/si";

function Header() {
  return (
    <header className="min-h-[85vh] px-6 md:px-12 lg:px-20 pt-24 flex items-center">
      <div className="w-full flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-12 lg:gap-24">
        
        <div className="flex flex-col gap-4 text-center lg:text-left max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold">
            Kayk Monteiro
          </h1>

          <p className="text-xl md:text-2xl text-blue-500 font-semibold">
            Desenvolvedor Full Stack
          </p>

          <p className="text-slate-700">
            Desenvolvedor em formação, com foco em Java, Spring Boot, React e SQL,
            buscando criar aplicações organizadas, funcionais e bem estruturadas.
          </p>

          <div className="flex justify-center lg:justify-start gap-4 mt-4">
            <a href="https://github.com/monteirokaykdev" target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-blue-400 hover:scale-110 transition">
              <FaGithubSquare />
            </a>

            <a href="https://linkedin.com/in/kaykmonteiro" target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-blue-400 hover:scale-110 transition">
              <FaLinkedin />
            </a>

            <a href="mailto:kayk.monteiro76@gmail.com" className="text-3xl hover:text-blue-400 hover:scale-110 transition">
              <SiGmail />
            </a>
          </div>
        </div>

        <div className="w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full border border-slate-800 flex items-center justify-center shadow-lg shadow-cyan-500/20 hover:scale-105 transition shrink-0">
          <div className="flex flex-col items-center gap-4 md:gap-6 text-5xl md:text-6xl">
            <FaReact className="hover:scale-125 hover:text-cyan-500 transition" />

            <div className="flex gap-6 md:gap-8">
              <SiSpringboot className="hover:scale-125 hover:text-green-600 transition" />
              <FaJava className="hover:scale-125 hover:text-orange-500 transition" />
            </div>

            <SiMysql className="hover:scale-125 hover:text-blue-600 transition" />
          </div>
        </div>

      </div>
    </header>
  );
}

export default Header;