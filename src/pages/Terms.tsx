import React from 'react';
import { FiAlertCircle, FiLock, FiEdit2, FiShield } from 'react-icons/fi';
import { useTheme } from '../context/useTheme'; // Supondo que você tenha um context de tema

const Termos: React.FC = () => {
  const { isDark } = useTheme();

  // Cores dos cards dependendo do tema
  const cardBg = isDark ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-800';
  const cardShadow = 'shadow-md rounded-lg p-6 space-y-3';

  return (
    <div className="p-8 max-w-4xl mx-auto space-y-6">
      <h1 className="text-4xl font-bold text-center mb-4">📜 Termos de Uso</h1>
      <p className="text-sm text-gray-500 text-center">Última atualização: 10 de novembro de 2025</p>

      {/* Seção 1 */}
      <div className={`${cardBg} ${cardShadow}`}>
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
          <FiAlertCircle /> 1. Uso da Plataforma
        </h2>
        <p>O usuário deve utilizar a plataforma de forma ética, legal e responsável, evitando:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Violar direitos de terceiros;</li>
          <li>Compartilhar conteúdos ilegais, ofensivos ou prejudiciais;</li>
          <li>Usar a plataforma para fins comerciais não autorizados.</li>
        </ul>
      </div>

      {/* Seção 2 */}
      <div className={`${cardBg} ${cardShadow}`}>
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-green-600">
          <FiLock /> 2. Cadastro e Conta
        </h2>
        <p>
          Para acessar certos recursos, é necessário criar uma conta. O usuário é responsável por manter
          a confidencialidade de suas credenciais e por todas as atividades realizadas em sua conta.
        </p>
      </div>

      {/* Seção 3 */}
      <div className={`${cardBg} ${cardShadow}`}>
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-purple-600">
          <FiEdit2 /> 3. Propriedade Intelectual
        </h2>
        <p>
          Todo conteúdo da plataforma, incluindo textos, imagens, vídeos e códigos, é protegido por direitos autorais.
          Uso não autorizado é proibido.
        </p>
      </div>

      {/* Seção 4 */}
      <div className={`${cardBg} ${cardShadow}`}>
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-red-600">
          <FiShield /> 4. Limite de Responsabilidade
        </h2>
        <p>Não nos responsabilizamos por:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Danos diretos ou indiretos decorrentes do uso da plataforma;</li>
          <li>Interrupções de serviço ou perda de dados;</li>
          <li>Decisões baseadas em informações da plataforma.</li>
        </ul>
      </div>

      {/* Conclusão */}
      <div className={`${cardBg} ${cardShadow} text-center`}>
        <p>
          Ao utilizar nossa plataforma, você concorda integralmente com estes termos.
        </p>
      </div>
    </div>
  );
};

export default Termos;
