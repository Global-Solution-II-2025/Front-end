import React from 'react';
import { FiShield, FiDatabase, FiShare2, FiLock } from 'react-icons/fi';
import { useTheme } from '../context/useTheme'; // Supondo que você tenha um context de tema

const Privacidade: React.FC = () => {
  const { isDark } = useTheme();

  const cardBg = isDark ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-800';
  const cardShadow = 'shadow-md rounded-lg p-6 space-y-3';

  return (
    <div className="p-8 max-w-4xl mx-auto space-y-6">
      <h1 className="text-4xl font-bold text-center mb-4">🛡️ Política de Privacidade</h1>
      <p className="text-sm text-gray-500 text-center">Última atualização: 10 de novembro de 2025</p>

      {/* Seção 1 */}
      <div className={`${cardBg} ${cardShadow}`}>
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
          <FiDatabase /> 1. Coleta de Dados
        </h2>
        <p>
          Coletamos apenas os dados necessários para fornecer os serviços da plataforma, incluindo informações
          de cadastro, preferências e uso da plataforma.
        </p>
      </div>

      {/* Seção 2 */}
      <div className={`${cardBg} ${cardShadow}`}>
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-green-600">
          <FiShield /> 2. Uso dos Dados
        </h2>
        <p>
          As informações coletadas são utilizadas para melhorar a experiência do usuário, personalizar conteúdos,
          fornecer suporte e otimizar os serviços.
        </p>
      </div>

      {/* Seção 3 */}
      <div className={`${cardBg} ${cardShadow}`}>
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-purple-600">
          <FiShare2 /> 3. Compartilhamento de Dados
        </h2>
        <p>
          Não compartilhamos seus dados pessoais com terceiros sem o seu consentimento explícito,
          exceto quando exigido por lei ou necessário para prestação de serviços essenciais.
        </p>
      </div>

      {/* Seção 4 */}
      <div className={`${cardBg} ${cardShadow}`}>
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-red-600">
          <FiLock /> 4. Segurança
        </h2>
        <p>
          Implementamos medidas técnicas e administrativas para proteger seus dados contra acessos não autorizados,
          perda, alteração ou divulgação.
        </p>
      </div>

      {/* Conclusão */}
      <div className={`${cardBg} ${cardShadow} text-center`}>
        <p>
          Em caso de dúvidas ou solicitações relacionadas a esta política, entre em contato com nossa equipe de suporte, localizado no fim da página.
        </p>
      </div>
    </div>
  );
};

export default Privacidade;
