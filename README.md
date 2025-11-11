# 💡 Portal de Aprendizado Inteligente (Upskilling/Reskilling com IA)

Plataforma web que recomenda trilhas de aprendizado personalizadas para o usuário, com base em seus interesses e perfil profissional, utilizando uma IA simples de recomendação.

---

## 👩‍💻 Equipe

| Integrante | Função Principal | Função Secundária |
|-------------|------------------|-------------------|
| **Pedro Brum** | Backend com **Java (Quarkus)** e integração com IA | Comunicação entre APIs |
| **Arthur Brito** | **Banco de Dados Oracle** e estrutura base do Frontend | Criação de páginas e componentes |
| **Felipe Flosi** | **Python (IA e recomendação inteligente)** | Frontend (rotas e integração com API) |

---

## ⚙️ Tecnologias Utilizadas

### 🧠 Inteligência Artificial
- **Python 3.10+**
- **FastAPI**
- **scikit-learn** (ou lógica simples de recomendação)
- **Requests / JSON para integração**

### 🧩 Backend (API)
- **Java com Quarkus**
- **JWT** para autenticação
- **RESTful API**
- **Integração com Python e Oracle**

### 🗃️ Banco de Dados
- **Oracle Database**
- Tabelas principais:
  - `usuarios`
  - `cursos`
  - `categorias`
  - `inscricoes`
  - `trilhas`

### 💻 Frontend
- **React + Vite**
- **TypeScript**
- **TailwindCSS**
- **Axios** para comunicação com API
- **React Router DOM**

---

## 🗓️ Cronograma de Desenvolvimento (7 Dias)

### **🧭 Dia 1 — Planejamento e Setup de Ambientes**
**Objetivo:** Definir arquitetura e preparar ambientes.

- Criar repositório no GitHub com Git Flow (`main`, `develop`, `feature/…`)
- Configurar ambiente:
  - `/frontend` (React + Vite + Tailwind)
  - `/backend-java` (Quarkus)
  - `/ia-python` (FastAPI)
- Testar build local de cada parte
- Criar README inicial e definir responsabilidades

📌 **Responsáveis:**
- Pedro → Estrutura da API Quarkus  
- Arthur → Setup frontend + BD Oracle  
- Felipe → Ambiente Python + API mock  

---

### **🧭 Dia 2 — Modelagem e Banco de Dados**
**Objetivo:** Criar e integrar o banco de dados Oracle.

- Modelagem ER: `usuarios`, `cursos`, `categorias`, `inscricoes`, `trilhas`
- Script SQL base e criação no Oracle
- Conexão entre Quarkus e Oracle
- Criação de entidades (Java e Python, se necessário)

📌 **Responsáveis:**
- Pedro → Modelos e entidades Java  
- Arthur → Banco Oracle e integração  
- Felipe → Teste de dados mock  

---

### **🧭 Dia 3 — Backend (API Quarkus + Endpoints principais)**
**Objetivo:** Criar endpoints e autenticação.

- Endpoints:
  - `POST /auth/register`  
  - `POST /auth/login`  
  - `GET /cursos` e `POST /cursos` (admin)  
  - `GET /usuarios/{id}` e `PUT /usuarios/{id}`
- JWT básico  
- Testar no Postman  

📌 **Responsáveis:**
- Pedro → Implementação e segurança  
- Arthur → Testes no BD  
- Felipe → Testes de integração  

---

### **🧭 Dia 4 — Frontend Base**
**Objetivo:** Estrutura de navegação e interface.

- Criar páginas: Login, Cadastro, Dashboard, Cursos  
- Criar componentes: Header, Sidebar, Cards  
- Configurar rotas com React Router  
- Conectar API de login e cursos  

📌 **Responsáveis:**
- Arthur e Felipe → Desenvolvimento das páginas  
- Pedro → Suporte de endpoints  

---

### **🧭 Dia 5 — IA e Recomendação**
**Objetivo:** Implementar recomendador inteligente.

- Criar script Python que sugere cursos por perfil
- Endpoint Python `/recomendar/{user_id}`
- Integração Quarkus → Python (requisição HTTP)
- Mock de respostas no frontend  

📌 **Responsáveis:**
- Pedro → Comunicação entre APIs  
- Felipe → IA e lógica de recomendação  
- Arthur → Base de dados de cursos  

---

### **🧭 Dia 6 — Integração e Ajustes**
**Objetivo:** Testar fluxo completo e refinar design.

- Conectar Frontend → API → IA  
- Ajustar UI com Tailwind  
- Testar login, listagem e recomendação  
- Criar trilhas dinâmicas personalizadas  

📌 **Responsáveis:**
- Pedro → Integração final  
- Arthur → Dashboard e design  
- Felipe → Testes e IA  

---

### **🧭 Dia 7 — Finalização e Entrega**
**Objetivo:** Finalizar, revisar e documentar.

- Criar README final com instruções e autores  
- Criar vídeo demo ou slides de apresentação  
- Revisar UX/UI e responsividade  
- Subir versão final (deploy)

📌 **Responsáveis:**
- Pedro → Deploy do backend  
- Arthur → Deploy do frontend  
- Felipe → Documentação da IA e testes finais  

---

## 🧱 Estrutura do Projeto

