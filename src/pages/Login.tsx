// src/pages/Login.tsx
import { useState, useEffect } from "react";
import {
  FiMail,
  FiLock,
  FiUser,
  FiCalendar,
  FiEye,
  FiEyeOff,
} from "react-icons/fi";
import { useNavigate, Link } from "react-router-dom";
import loginBg from "../assets/img/login-bg.jpg";
import { useTheme } from "../context/useTheme";
import { usuarioApi } from "../api/JavaApi";

interface FormState {
  nome: string;
  email: string;
  senha: string;
  confirmarSenha: string;
  dataNascimento: string;
  aceitarTermos: boolean;
}

export default function Login() {
  const { isDark } = useTheme();
  const navigate = useNavigate();

  const [isRegister, setIsRegister] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState<FormState>({
    nome: "",
    email: "",
    senha: "",
    confirmarSenha: "",
    dataNascimento: "",
    aceitarTermos: false,
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) navigate("/", { replace: true });
  }, [navigate]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMsg("");
    setLoading(true);

    try {
      if (isRegister) {
        if (form.senha !== form.confirmarSenha) {
          throw new Error("As senhas não coincidem.");
        }

        const novoUsuario = {
          nome: form.nome,
          email: form.email,
          senha: form.senha,
          dataNascimento: form.dataNascimento,
          aceitarTermos: form.aceitarTermos,
        };

        const result = await usuarioApi.criarUsuario(novoUsuario);

        localStorage.setItem("token", "LOGADO"); // ajuste se seu backend retornar token
        localStorage.setItem("nome", result.nome.split(" ")[0]);
      } else {
        const result = await usuarioApi.login({
          email: form.email,
          senha: form.senha,
        });

        localStorage.setItem("token", result.token);
        localStorage.setItem("nome", result.nome);
      }

      navigate("/");
    } catch (err) {
      if (err instanceof Error) setMsg(err.message);
      else setMsg("Erro inesperado.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`min-h-screen flex ${
        isDark ? "bg-gray-900" : "bg-white"
      } transition-colors duration-500`}
    >
      {/* Imagem lateral */}
      <div
        className="hidden lg:flex w-1/2 bg-cover bg-center"
        style={{ backgroundImage: `url(${loginBg})` }}
      />

      {/* Formulário */}
      <div
        className={`flex-1 flex flex-col justify-center items-center p-8 sm:p-12 transition-colors duration-500 ${
          isDark ? "bg-[#1A1A1A]" : "bg-linear-to-br from-white to-indigo-50"
        }`}
      >
        <div
          className={`w-full max-w-md rounded-xl p-8 border shadow-xl transition-colors duration-500 ${
            isDark
              ? "bg-[#2A2A2A] border-[#2A2A2A] text-gray-100"
              : "bg-white border-gray-100 text-gray-800"
          }`}
        >
          <h2
            className={`text-2xl font-semibold text-center mb-6 ${
              isDark ? "text-[#00A67E]" : "text-indigo-700"
            }`}
          >
            {isRegister ? "Crie sua conta" : "Bem-vindo(a) de volta"}
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            {isRegister && (
              <>
                <div>
                  <label className="text-sm font-medium">Nome completo</label>
                  <div
                    className={`flex items-center border rounded-lg px-3 ${
                      isDark
                        ? "border-[#2A2A2A] bg-[#1A1A1A]"
                        : "border-gray-300 bg-white"
                    }`}
                  >
                    <FiUser className="text-gray-300" />
                    <input
                      type="text"
                      name="nome"
                      value={form.nome}
                      onChange={handleChange}
                      className="w-full p-2 outline-none bg-transparent text-current"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium">
                    Data de nascimento
                  </label>
                  <div
                    className={`flex items-center border rounded-lg px-3 ${
                      isDark
                        ? "border-[#2A2A2A] bg-[#1A1A1A]"
                        : "border-gray-300 bg-white"
                    }`}
                  >
                    <FiCalendar className="text-gray-300" />
                    <input
                      type="date"
                      name="dataNascimento"
                      value={form.dataNascimento}
                      onChange={handleChange}
                      className="w-full p-2 outline-none bg-transparent text-current"
                      required
                    />
                  </div>
                </div>
              </>
            )}

            {/* E-mail */}
            <div>
              <label className="text-sm font-medium">E-mail</label>
              <div
                className={`flex items-center border rounded-lg px-3 ${
                  isDark
                    ? "border-[#2A2A2A] bg-[#1A1A1A]"
                    : "border-gray-300 bg-white"
                }`}
              >
                <FiMail className="text-gray-300" />
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full p-2 outline-none bg-transparent text-current"
                  required
                />
              </div>
            </div>

            {/* Senha */}
            <div>
              <label className="text-sm font-medium">Senha</label>
              <div
                className={`flex items-center border rounded-lg px-3 ${
                  isDark
                    ? "border-[#2A2A2A] bg-[#1A1A1A]"
                    : "border-gray-300 bg-white"
                }`}
              >
                <FiLock className="text-gray-300" />
                <input
                  type={showPassword ? "text" : "password"}
                  name="senha"
                  value={form.senha}
                  onChange={handleChange}
                  className="w-full p-2 outline-none bg-transparent text-current"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-gray-500 hover:text-[#00A67E] transition-colors duration-300"
                >
                  {showPassword ? <FiEyeOff /> : <FiEye />}
                </button>
              </div>
            </div>

            {isRegister && (
              <>
                <div>
                  <label className="text-sm font-medium">
                    Confirmação de senha
                  </label>
                  <div
                    className={`flex items-center border rounded-lg px-3 ${
                      isDark
                        ? "border-[#2A2A2A] bg-[#1A1A1A]"
                        : "border-gray-300 bg-white"
                    }`}
                  >
                    <FiLock className="text-gray-300" />
                    <input
                      type={showPassword ? "text" : "password"}
                      name="confirmarSenha"
                      value={form.confirmarSenha}
                      onChange={handleChange}
                      className="w-full p-2 outline-none bg-transparent text-current"
                      required
                    />
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm">
                  <input
                    type="checkbox"
                    name="aceitarTermos"
                    checked={form.aceitarTermos}
                    onChange={handleChange}
                    required
                  />
                  <label>
                    Aceito os{" "}
                    <Link to="/termos" className="text-indigo-600 underline">
                      Termos de Uso
                    </Link>{" "}
                    e{" "}
                    <Link
                      to="/privacidade"
                      className="text-indigo-600 underline"
                    >
                      Política de Privacidade
                    </Link>
                  </label>
                </div>
              </>
            )}

            {msg && (
              <p className="text-center text-red-500 text-sm">{msg}</p>
            )}

            <button
              type="submit"
              className={`w-full py-2 rounded-lg font-medium ${
                isDark
                  ? "bg-[#00A67E] hover:bg-[#007a5e] text-gray-100"
                  : "bg-indigo-600 hover:bg-indigo-700 text-white"
              }`}
              disabled={loading}
            >
              {loading
                ? "Carregando..."
                : isRegister
                ? "Cadastrar"
                : "Entrar"}
            </button>
          </form>

          <p
            className={`text-sm text-center mt-5 ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}
          >
            {isRegister ? "Já tem uma conta?" : "Ainda não tem uma conta?"}{" "}
            <button
              onClick={() => setIsRegister(!isRegister)}
              className="text-[#00A67E] font-medium hover:underline"
            >
              {isRegister ? "Fazer login" : "Cadastrar-se"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
