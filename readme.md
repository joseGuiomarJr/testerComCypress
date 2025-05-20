# 🧪 Projeto de Testes Automatizados com Cypress – Serverest

Este repositório apresenta um projeto completo de **testes automatizados end-to-end** utilizando o Cypress, focado na validação de fluxos de **cadastro, login e manipulação de produtos** em uma aplicação web (Serverest).

---

![Execução de testes Cypress](./assets/cypress-teste-email-invalido.png)

---

## 📌 Visão Geral

- 🔍 Validação completa do **formulário de cadastro** (positivo e negativo)
- 🧪 Cobertura de **cenários reais** de entrada de dados inválidos
- 🧼 Organização modular e escalável de arquivos de teste
- 🚀 Testes executados via **Cypress Test Runner**

---

## 🧠 O que foi testado?

### ✅ Testes Positivos
- Cadastro de usuários comuns e administradores
- Login com credenciais válidas
- Inclusão e visualização de produtos

### ❌ Testes Negativos
- Cadastro com campos obrigatórios em branco
- Cadastro com e-mails malformados:
  - Com espaços
  - Com múltiplos “@”
  - Sem ponto no domínio
- Cadastro com senhas vazias
- Login inválido

---

## 📁 Estrutura do Projeto

📦cypress
┣ 📂e2e
┃ ┣ 📂cadastro # Testes de cadastro
┃ ┃ ┣ cadastrarFuncNegEmailErro.cy.js
┃ ┃ ┣ cadastrarFuncNegNome.cy.js
┃ ┃ ┣ CadastroUser.cy.js
┃ ┃ ┗ CadastroAdm.cy.js
┃ ┣ 📂funcionalidades # Testes de funcionalidades gerais
┃ ┣ 📂login # Login de usuários
┃ ┃ ┗ loginUser.cy.js
┗ 📜app.cy.js # Ponto de entrada de testes gerais

📂support
┗ 📜commands.js # Custom commands para reuso

📂fixtures
┗ 📜example.json # Mocks de dados

📜README.md
📜cypress.config.js
📜package.json



---

## ⚙️ Tecnologias Utilizadas

- [Cypress](https://www.cypress.io/) – Framework de testes E2E
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

📸 Screenshot
<img src="../fixtures/screem.jpg"/>

👨‍💻 Autor
José Guilomar
🧠 QA em formação com foco em testes automatizados
📧 jratividades@hotmail.com
