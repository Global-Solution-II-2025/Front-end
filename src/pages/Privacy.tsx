import {
  FiShield,
  FiDatabase,
  FiShare2,
  FiLock
} from "react-icons/fi";
import { useTheme } from "../context/useTheme";
import { Link } from "react-router-dom";

const Privacidade: React.FC = () => {
  const { isDark } = useTheme();

  const bgPage = isDark ? "bg-[#1A1A1A] text-gray-200" : "bg-gray-50 text-gray-800";

  const cardStyle =
    `rounded-2xl shadow-md overflow-hidden border transition-all duration-500 transform hover:scale-105 ${
      isDark
        ? "bg-[#2A2A2A] border-[#1A1A1A] text-gray-200"
        : "bg-white border-gray-200 text-gray-800"
    } p-6`;

  const titleColor = isDark ? "text-gray-200" : "text-blue-600";

  const buttonStyle = `
    inline-block mt-4 px-6 py-2 rounded-xl font-semibold transition-all duration-300 
    transform hover:scale-105 hover:shadow-lg
    ${isDark ? "bg-[#2A2A2A] border border-gray-200 text-gray-200 hover:bg-[#3A3A3A]" 
             : "bg-white border border-gray-300 text-gray-800 hover:bg-gray-100"}
  `;

  return (
    <div className={`min-h-screen py-16 px-6 ${bgPage}`}>

      {/* HERO */}
      <div className="max-w-4xl mx-auto text-center space-y-3 mb-12">
        <h1 className="text-5xl font-extrabold bg-linear-to-r from-gray-200 to-gray-200 bg-clip-text text-transparent">
          Política de Privacidade
        </h1>
        <p className="text-gray-400">
          Última atualização: 10 de novembro de 2025
        </p>

        <p className="max-w-2xl mx-auto text-gray-500 mt-4">
          Sua privacidade é fundamental para nós. Nesta página você encontra como coletamos,
          utilizamos e protegemos seus dados em nossa plataforma.
        </p>
      </div>

      {/* SEÇÕES */}
      <div className="max-w-4xl mx-auto space-y-8">

        <div className={cardStyle}>
          <h2 className={`text-2xl font-semibold flex items-center gap-2 ${titleColor}`}>
            <FiDatabase size={26} /> 1. Coleta de Dados
          </h2>
          <p className="mt-3 leading-relaxed">
            Coletamos apenas informações essenciais para operação do sistema, como dados de cadastro,
            interações e configurações necessárias para funcionamento da plataforma.
          </p>
        </div>

        <div className={cardStyle}>
          <h2 className={`text-2xl font-semibold flex items-center gap-2 ${titleColor}`}>
            <FiShield size={26} /> 2. Uso dos Dados
          </h2>
          <p className="mt-3 leading-relaxed">
            Seus dados são utilizados exclusivamente para aprimorar sua experiência, otimizar
            funcionalidades e garantir segurança e personalização.
          </p>
        </div>

        <div className={cardStyle}>
          <h2 className={`text-2xl font-semibold flex items-center gap-2 ${titleColor}`}>
            <FiShare2 size={26} /> 3. Compartilhamento
          </h2>
          <p className="mt-3 leading-relaxed">
            Não compartilhamos suas informações com terceiros sem autorização. Em situações legais,
            seguimos estritamente os requisitos de confidencialidade.
          </p>
        </div>

        <div className={cardStyle}>
          <h2 className={`text-2xl font-semibold flex items-center gap-2 ${titleColor}`}>
            <FiLock size={26} /> 4. Segurança
          </h2>
          <p className="mt-3 leading-relaxed">
            Utilizamos tecnologias de proteção robustas, criptografia e políticas internas rígidas
            para garantir a integridade e confidencialidade dos seus dados.
          </p>
        </div>

        <div className={`${cardStyle} text-center`}>
          <p className="leading-relaxed">
            Em caso de dúvidas sobre esta política, nossa equipe de suporte está à disposição para auxiliar.
          </p>
        </div>
      {/* BOTÃO VOLTAR */}
      <div className="max-w-4xl mx-auto mb-6">
        <Link to="/login" className={buttonStyle}>
          Voltar ao Login
        </Link>
      </div>

      </div>
    </div>
  );
};

export default Privacidade;
