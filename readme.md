# 🧪 Projeto de Testes Automatizados – Serverest

Este repositório apresenta um projeto completo de **testes automatizados** utilizando **Cypress** para frontend e **Postman** para backend, focado na validação de fluxos de **cadastro, login e manipulação de produtos** em uma aplicação baseada na API pública Serverest.

---

## 📸 Execução de testes Cypress

<img src="./cypress/e2e/assets/screem.jpg" alt="Execução de teste com email inválido" width="600"/>

---

## 📌 Visão Geral

- 🔍 Validação completa do **formulário de cadastro** (positivo e negativo)
- 🧪 Cobertura de **cenários reais** com dados inválidos e vulnerabilidades
- 🧼 Organização modular e escalável de arquivos de teste
- 🚀 Testes executados via **Cypress Test Runner** e **Postman Runner**

---

## 🧠 O que foi testado?

### ✅ Testes Positivos (Frontend)
- Cadastro de usuários comuns e administradores
- Cadastro de novos usuários
- Login com credenciais válidas
- Inclusão,exclusão,pesquisa e visualização de produtos

### ❌ Testes Negativos (Frontend)
- Campos obrigatórios em branco
- E-mails malformados:
  - Com espaços
  - Com múltiplos “@”
  - Sem ponto no domínio
- Senhas vazias ou curtas
- Login inválido

---

## 🧪 Cenários de Testes

- Link para os planos de teste front-end: [(https://docs.google.com/spreadsheets/d/1YaS8QGDxzoFfKDqgzkrcxGc5kIQaZvb7Ve8ioHWJU6s/edit?usp=sharing)]
- Link para os planos de teste back-end: [(https://docs.google.com/spreadsheets/d/1f7C1ZCjv1S-MpulreQ8sKwiPQgG3QhUhZlTKmtBYXWk/edit?usp=sharing)]

---

🗂️ Planos de Teste

🎨 Frontend (Cypress)
Página de teste frontend: https://front.serverest.dev/login

Validação de formulários de cadastro e login

Simulação de interações do usuário na interface

Testes com entradas válidas e inválidas

Validação de mensagens de erro e sucesso

Validação de cadastro de produtos

🔧 Backend (Postman)

Documentação da API: https://serverest.dev/

Testes nos endpoints POST /usuarios, GET /produtos, POST /login

Testes com dados válidos e inválidos

Verificação de códigos de status (200, 400, 401, 422)

Validação da estrutura de resposta JSON

## 📁 Estrutura do Projeto

```bash
📦cypress
 ┣ 📂e2e
 ┃ ┣ 📂cadastroUsuarios
 ┃ ┃ ┣ cadastrarFuncNegEmailErro.cy.js
 ┃ ┃ ┣ cadastrarFuncNegEmBranco.cy.js
 ┃ ┃ ┣ CadastrarFuncNegSenha.cy.js
 ┃ ┃ ┣ CadastroAdm.cy.js
 ┃ ┃ ┣ CadastroFuncNegEmail.cy.js
 ┃ ┃ ┣ CadastroFuncNegNome.cy.js
 ┃ ┃ ┗ CadastroUser.cy.js
 ┃ ┣ 📂funcionalidades
 ┃ ┃ ┣ menuFuncionalidadesAdm.cy.js
 ┃ ┃ ┗ menuFuncionalidadesUser.cy.js
 ┃ ┣ 📂login
 ┃ ┃ ┣ loginAdm.cy.js
 ┃ ┃ ┗ loginUser.cy.js
 ┃ ┣ 📂produtos
 ┃ ┃ ┣ adicionandoProdutosCarrinho.cy.js
 ┃ ┃ ┣ LimparListaDeProdutos.cy.js
 ┃ ┃ ┗ PesquisarProdutoUserComun.cy.js
 ┃ ┗ app.cy.js
 ┣ 📂fixtures
 ┣ 📂support
 ┗ cypress.config.js

## ⚙️ Tecnologias Utilizadas

- [Cypress](https://www.cypress.io/) – Framework de testes E2E (Frontend)
- [Postman](https://www.postman.com/) – Testes de API REST (Backend)
- [Faker.js](https://fakerjs.dev/) – Geração de dados dinâmicos
- [Cypress File Upload](https://www.npmjs.com/package/cypress-file-upload) – Upload automatizado de imagens

---

## 🚀 Como Executar os Testes

1. **Clone o projeto:**

git clone https://github.com/seu-usuario/testes-cypress-serverest.git
cd testes-cypress-serverest



2. **Instale as dependências:**

npm install

3. **Abra o cypress:**

npx cypress open

4. **Execute os testes manualmente ou em modo headless:**

npx cypress run

🧩 Diferenciais do Projeto
✔️ Validações específicas de entrada com dados inválidos (e-mails, senhas, campos vazios)
✔️ Separação clara de testes funcionais, login e cadastro
✔️ Uso eficiente de comandos customizados
✔️ Fácil manutenção e legibilidade
✔️ Código escalável e pronto para CI/CD

🐞 Relatório de Evidência de Bug – API Serverest
🔍 Projeto: Testes Automatizados da API Serverest
🛠 Ferramentas: Postman, Node.js, API pública https://serverest.dev
📅 Data da Execução: 10/05/2025
👤 Responsável: José Guilomar
📂 Ambiente: Produção (API pública)
📌 Evidência Principal: Listagem de usuários retorna senha em texto plano + permissões administrativas indevidas

🐞 Descrição do Bug Identificado
ID do Bug: BUG-API-001

Severidade: Alta

Endpoint: GET https://serverest.dev/usuarios

Comportamento Observado:
O endpoint retorna objetos de usuários contendo o campo "password" com valor visível em texto plano.
Além disso, um dos usuários listados possui "administrador": "true" mesmo utilizando senha fraca "teste".

📷 Imagem da Evidência (Postman)
Título: Bug - Senha comum com privilégio de admin
Prints: https://drive.google.com/drive/folders/1aXtMeAd5duEDXQQCPN5lIT27NwULccyX?usp=drive_link


Mostra claramente um usuário com:

password: "teste"
administrador: "true"
Resposta HTTP: 200 OK (comportamento aceito pela API).

🧪 Requisição Utilizada
Método: GET

Endpoint: /usuarios

Cabeçalhos: Nenhum token necessário

Parâmetros: Nenhum

🛡️ Riscos e Impactos
Segurança: Senhas expostas publicamente

Acesso indevido: Falha crítica de controle de permissões

Conformidade: Não aderente à LGPD / GDPR

🐞 Relatório de Evidência de Bug – Front-end Serverest 
🔍 Projeto: Testes Automatizados com Cypress
🛠 Ferramentas: Cypress, Node.js, site: https://front.serverest.dev/login
📅 Data da Execução: 10/05/2025
👤 Responsável: José Guiomar Jr
📂 Ambiente: https://front.serverest.dev/login
📌 Evidência em :https://drive.google.com/drive/folders/1VpLARHrkQL6tS2kx52RK2SdswJzb9xsv?usp=sharing


👨‍💻 Autor
José Guiomar Jr.
🧠 QA em formação com foco em testes automatizados
📧 jratividades@hotmail.com
