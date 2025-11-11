import { useState, useEffect } from "react";
import { FiMail, FiLock, FiUser, FiCalendar, FiEye, FiEyeOff } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import loginBg from "../assets/login-bg.jpg";

export default function Login() {
  const navigate = useNavigate();
  const [isRegister, setIsRegister] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    nome: "",
    email: "",
    senha: "",
    confirmarSenha: "",
    dataNascimento: "",
    aceitarTermos: false,
  });

  // 🔹 “Simulação” de arquivo JSON local via localStorage
  const getUsuarios = () => JSON.parse(localStorage.getItem("usuariosDB") || "[]");
  const saveUsuarios = (usuarios: any[]) =>
    localStorage.setItem("usuariosDB", JSON.stringify(usuarios, null, 2));

    useEffect(() => {
    const token = localStorage.getItem("token");
    // se já estiver logado, só redireciona uma vez
    if (token) {
        navigate("/", { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const loginLocal = () => {
    const usuarios = getUsuarios();
    const user = usuarios.find(
      (u: any) => u.email === form.email && u.senha === form.senha
    );
    if (!user) throw new Error("Usuário ou senha inválidos.");

    localStorage.setItem("token", "localToken");
    localStorage.setItem("nome", user.nome.split(" ")[0]);
  };

  const registerLocal = () => {
    if (form.senha !== form.confirmarSenha)
      throw new Error("As senhas não coincidem.");

    const usuarios = getUsuarios();
    const exists = usuarios.find((u: any) => u.email === form.email);
    if (exists) throw new Error("E-mail já cadastrado.");

    const novoUsuario = {
      nome: form.nome,
      email: form.email,
      senha: form.senha,
      dataNascimento: form.dataNascimento,
      aceitarTermos: form.aceitarTermos,
    };

    usuarios.push(novoUsuario);
    saveUsuarios(usuarios);

    localStorage.setItem("token", "localToken");
    localStorage.setItem("nome", form.nome.split(" ")[0]);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMsg("");
    setLoading(true);

    try {
      if (isRegister) registerLocal();
      else loginLocal();

      navigate("/");
    } catch (err: any) {
      setMsg(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Lado da imagem */}
      <div
        className="hidden lg:flex w-1/2 bg-cover bg-center"
        style={{ backgroundImage: `url(${loginBg})` }}
      />

      {/* Lado do formulário */}
      <div className="flex-1 flex flex-col justify-center items-center p-8 sm:p-12 bg-gradient-to-br from-white to-indigo-50">
        <div className="w-full max-w-md bg-white shadow-xl rounded-xl p-8 border border-gray-100">
          <h2 className="text-2xl font-semibold text-center text-indigo-700 mb-6">
            {isRegister ? "Crie sua conta" : "Bem-vindo(a) de volta"}
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            {isRegister && (
              <>
                <div>
                  <label className="text-sm font-medium">Nome completo</label>
                  <div className="flex items-center border rounded-lg px-3">
                    <FiUser className="text-gray-400" />
                    <input
                      type="text"
                      name="nome"
                      value={form.nome}
                      onChange={handleChange}
                      className="w-full p-2 outline-none"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium">Data de nascimento</label>
                  <div className="flex items-center border rounded-lg px-3">
                    <FiCalendar className="text-gray-400" />
                    <input
                      type="date"
                      name="dataNascimento"
                      value={form.dataNascimento}
                      onChange={handleChange}
                      className="w-full p-2 outline-none"
                      required
                    />
                  </div>
                </div>
              </>
            )}

            <div>
              <label className="text-sm font-medium">E-mail</label>
              <div className="flex items-center border rounded-lg px-3">
                <FiMail className="text-gray-400" />
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full p-2 outline-none"
                  required
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium">Senha</label>
              <div className="flex items-center border rounded-lg px-3">
                <FiLock className="text-gray-400" />
                <input
                  type={showPassword ? "text" : "password"}
                  name="senha"
                  value={form.senha}
                  onChange={handleChange}
                  className="w-full p-2 outline-none"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-gray-500 hover:text-indigo-600"
                >
                  {showPassword ? <FiEyeOff /> : <FiEye />}
                </button>
              </div>
            </div>

            {isRegister && (
              <>
                <div>
                  <label className="text-sm font-medium">Confirmação de senha</label>
                  <div className="flex items-center border rounded-lg px-3">
                    <FiLock className="text-gray-400" />
                    <input
                      type={showPassword ? "text" : "password"}
                      name="confirmarSenha"
                      value={form.confirmarSenha}
                      onChange={handleChange}
                      className="w-full p-2 outline-none"
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
                    <a href="/termos" className="text-indigo-600 underline">
                      Termos de Uso
                    </a>{" "}
                    e{" "}
                    <a href="/privacidade" className="text-indigo-600 underline">
                      Política de Privacidade
                    </a>
                  </label>
                </div>
              </>
            )}

            {msg && <p className="text-center text-red-500 text-sm">{msg}</p>}

            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg transition-all"
              disabled={loading}
            >
              {loading ? "Carregando..." : isRegister ? "Cadastrar" : "Entrar"}
            </button>
          </form>

          <p className="text-sm text-center mt-5 text-gray-600">
            {isRegister ? "Já tem uma conta?" : "Ainda não tem uma conta?"}{" "}
            <button
              onClick={() => setIsRegister(!isRegister)}
              className="text-indigo-600 font-medium hover:underline"
            >
              {isRegister ? "Fazer login" : "Cadastrar-se"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
