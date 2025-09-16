# back-end

npm init -y
npm install express pg dotenv pg-hstore cors sequelize //em casa no fork ou clone basta colocar npm install

# Criando estrutura de pastas 
-src

-src/config
-src/config/configDB

-src/modules/aluno
-src/modules/aluno/controllers
-src/modules/aluno/models
-src/modules/aluno/routes

-src/modules/curso/controllers
-src/modules/curso/models
-src/modules/curso/routes

# criar aruivos na raiz
.env
.gitignore
README.md

.env
DB_USER=postgres
DB_HOST=localhost
DB_DATABASE=aula
DB_PASSWORD=BemVindo!  // em casa a senha é Porto321@
DB_PORT=5432
PORT=3000

# criar arquivo na raiz do modules para fazer conecção com chaves das tabelas

index.js

# para testar ir para o terminal 
node index.js 



# --------termina o BACK-END---------
# -----------------------------------


# 🛠 Exemplo de fluxo prático
1 .Começa com main.jsx chamando App.jsx.

2. App.jsx chama pages/Home.jsx.

3. Home.jsx chama componentes de components/.

4. Esses componentes usam services/ para buscar dados da API.

5. Resultado renderizado na tela.


# front-end
npm create vite@latest ./
React
Javascript
npm install //em casa precisa dar somente este comando
npm install axios react-router-dom


# .env
.env
VITE_API_URL=http://localhost:3000

# ampliar src
-src/componentes
-src/pages
-src/service

-src/componentes/AlunoForm
-src/componentes/CursoForm
-src/componentes/ListarAlunos
-src/componentes/ListarCursos

# Pages
-pages/AlunoPage
-Pages/CursoPages

# Services
-services/alunoService.js
-services/api,js
-services/cursoService.js

# Apaga o conteúdo e inicializa o index.css
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

# Apaga o App.css e refax o APP,jsx apra o novo sistema com os seus respactivos componentes - ex: 
import React from 'react'
import PageCurso from './pages/CursoPage/CursoPage'
import PageAluno from './pages/AlunoPage/AlunoPage';

function App() {

  return (
    <>
      <h1>Projeto integração front + back</h1>
      <PageCurso />
      <hr />
      <PageAluno />

    </>
  )
}

export default App;

# testar o sistema rodando
npm run dev





