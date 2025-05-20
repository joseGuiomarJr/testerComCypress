# 🧪 Testes Automatizados com Cypress – Cadastro de Usuários e Produtos

Este repositório contém uma suíte de testes automatizados usando **Cypress** voltada para a validação de funcionalidades de um sistema de cadastro de usuários (admin e comum) e produtos.

## 📁 Estrutura do Projeto

📦cypress
┣ 📂e2e
┃ ┣ 📂cadastro # Testes de cadastro de usuários
┃ ┣ 📂funcionalidades # Fluxos funcionais (login, menu, produto, etc)
┃ ┣ 📂login # Testes de login
┃ ┗ 📜app.cy.js # Arquivo principal que orquestra execuções
┣ 📂support
┃ ┗ 📜commands.js # Custom commands para reutilização
┗ 📂fixtures # Dados mockados para cenários de teste


## 🧠 Objetivo

Automatizar testes **positivos e negativos** para garantir a robustez do sistema frente a entradas válidas e inválidas, usando Cypress como ferramenta de testes end-to-end.

---

## 🧪 Funcionalidades Testadas

- ✅ Cadastro de usuários admin e comuns  
- ❌ Testes negativos de cadastro com:
  - Campos obrigatórios vazios
  - Senhas ou e-mails inválidos
  - Caracteres especiais em e-mails
  - Múltiplos “@” ou espaços em e-mails
- 🔐 Login de usuários
- 🛒 Cadastro de produtos com imagens

---

## ⚙️ Tecnologias Utilizadas

- [Cypress](https://www.cypress.io/) – Automação de testes end-to-end
- [Faker.js](https://fakerjs.dev/) – Geração de dados dinâmicos
- [cypress-file-upload](https://www.npmjs.com/package/cypress-file-upload) – Upload de arquivos
- JavaScript (ES6)

---

## 🚀 Como Executar

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/seu-usuario/nome-do-repo.git
   cd nome-do-repo
Instale as dependências:


npm install
Execute os testes no modo interativo:


npx cypress open
Ou em modo headless:


npx cypress run
📷 Demonstrações Visuais
Exemplo da estrutura e execução dos testes no terminal + IDE


💡 Diferenciais do Projeto
Cobertura completa de testes negativos reais

Uso de boas práticas de automação, como:

Modularização de comandos (commands.js)

Separação por contexto de testes

Nomenclatura clara e descritiva

Fácil manutenção e escalabilidade

👨‍💻 Autor
José Guiomar Jr.
📧 jratividades@hotmail.com
🔗 linkedin.com/in/josé-guiomar-silva-jr-1a968b198 • GitHub

📌 Observações
Caso deseje rodar os testes localmente, é necessário ter o Node.js instalado.