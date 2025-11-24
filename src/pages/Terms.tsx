import { FiAlertCircle, FiLock, FiEdit2, FiShield } from "react-icons/fi";
import { useTheme } from "../context/useTheme";
import { Link } from "react-router-dom";


const Termos: React.FC = () => {
  const { isDark } = useTheme();

  const bgPage = isDark ? "bg-[#1A1A1A] text-gray-200" : "bg-gray-50 text-gray-800";

  const buttonStyle = `
    inline-block mt-4 px-6 py-2 rounded-xl font-semibold transition-all duration-300 
    transform hover:scale-105 hover:shadow-lg
    ${isDark ? "bg-[#2A2A2A] border border-gray-200 text-gray-200 hover:bg-[#3A3A3A]" 
             : "bg-white border border-gray-300 text-gray-800 hover:bg-gray-100"}
  `;

  const cardStyle = `
    rounded-2xl shadow-md overflow-hidden border transition-all duration-500 transform hover:scale-105
    ${
      isDark
        ? "bg-[#2A2A2A] border-[#1A1A1A] text-gray-200"
        : "bg-white border-gray-200 text-gray-800"
    } p-6
  `;

  const titleColor = isDark ? "text-gray-200" : "text-blue-600";

  return (
    <div className={`min-h-screen py-16 px-6 ${bgPage}`}>
      {/* HERO */}
      <div className="max-w-4xl mx-auto text-center space-y-3 mb-12">
        <h1 className="text-5xl font-extrabold bg-linear-to-r from-gray-200 to-gray-200 bg-clip-text text-transparent">
          Termos de Uso
        </h1>
        <p className="text-gray-400">Última atualização: 10 de novembro de 2025</p>

        <p className="max-w-2xl mx-auto text-gray-500 mt-4">
          Leia atentamente os termos abaixo. A utilização da plataforma implica concordância
          total com todas as condições aqui descritas.
        </p>
      </div>

      {/* SEÇÕES */}
      <div className="max-w-4xl mx-auto space-y-8">

        {/* Seção 1 */}
        <div className={cardStyle}>
          <h2 className={`text-2xl font-semibold flex items-center gap-2 ${titleColor}`}>
            <FiAlertCircle size={26} /> 1. Uso da Plataforma
          </h2>
          <p className="mt-3 leading-relaxed">
            O usuário deve utilizar a plataforma de forma ética, legal e responsável, evitando:
          </p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Violar direitos de terceiros;</li>
            <li>Compartilhar conteúdos ilegais, ofensivos ou prejudiciais;</li>
            <li>Usar a plataforma para fins comerciais não autorizados.</li>
          </ul>
        </div>

        {/* Seção 2 */}
        <div className={cardStyle}>
          <h2 className={`text-2xl font-semibold flex items-center gap-2 ${titleColor}`}>
            <FiLock size={26} /> 2. Cadastro e Conta
          </h2>
          <p className="mt-3 leading-relaxed">
            Para acessar certos recursos, é necessário criar uma conta. O usuário é responsável
            por manter a confidencialidade de suas credenciais e por todas as atividades realizadas
            em sua conta.
          </p>
        </div>

        {/* Seção 3 */}
        <div className={cardStyle}>
          <h2 className={`text-2xl font-semibold flex items-center gap-2 ${titleColor}`}>
            <FiEdit2 size={26} /> 3. Propriedade Intelectual
          </h2>
          <p className="mt-3 leading-relaxed">
            Todo conteúdo da plataforma, incluindo textos, imagens, vídeos e códigos, é protegido
            por direitos autorais. Qualquer uso não autorizado é estritamente proibido.
          </p>
        </div>

        {/* Seção 4 */}
        <div className={cardStyle}>
          <h2 className={`text-2xl font-semibold flex items-center gap-2 ${titleColor}`}>
            <FiShield size={26} /> 4. Limite de Responsabilidade
          </h2>
          <p className="mt-3 leading-relaxed">Não nos responsabilizamos por:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Danos diretos ou indiretos decorrentes do uso da plataforma;</li>
            <li>Interrupções de serviço ou perda de dados;</li>
            <li>Decisões tomadas com base em informações fornecidas pela plataforma.</li>
          </ul>
        </div>

        {/* Conclusão */}
        <div className={`${cardStyle} text-center`}>
          <p className="leading-relaxed">
            Ao utilizar nossa plataforma, você declara estar ciente e de acordo com todos os termos
            apresentados acima.
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

export default Termos;
