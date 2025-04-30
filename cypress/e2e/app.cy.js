import { faker } from '@faker-js/faker';
import 'cypress-file-upload';

const nome = faker.person.fullName();
const email = faker.internet.email();
const senha = faker.internet.password();

const nomeUsuario = faker.person.fullName();
const emailUsuario = faker.internet.email();
const senhaUsuario = faker.internet.password();

const nomeUsuarioSecundario = faker.person.fullName();
const emailUsuarioSecundario = faker.internet.email();
const senhaUsuarioSecundario = faker.internet.password();

const nomeProduto = faker.commerce.productName();
    const preco = faker.number.int({ min: 10, max: 500 });
    const descricao = faker.commerce.productDescription();
    const quantidade = faker.number.int({ min: 1, max: 100 });

describe('TESTES FUNCIONAIS FRONT-SERVEREST', () => {

  it('TC 000 ACESSANDO PAGE LOGIN', () => {
    cy.visit('/');
  });

  it('TC 001 CADASTRANDO USUARIO COM ADM COM DADOS VALIDOS', () => {
  

    cy.get('[data-testid="cadastrar"]').click();
    cy.get('[data-testid="nome"]').type(nome);
    cy.get('[data-testid="email"]').type(email);
    cy.get('[data-testid="password"]').type(senha);
    cy.get('[data-testid="checkbox"]').click();
    cy.get('[data-testid="cadastrar"]').click();
    cy.wait(2000);
    cy.get('.alert-link').contains("Cadastro realizado com sucesso");
  });

  it('TC 002 TESTANDO FUNCIONALIDADE CADASTRAR USUÁRIOS ADM DADOS VALIDOS', () => {
   

    cy.get('[data-testid="cadastrar-usuarios"]').click();
    cy.get('[data-testid="nome"]').type(nomeUsuario);
    cy.get('[data-testid="email"]').type(emailUsuario);
    cy.get('[data-testid="password"]').type(senhaUsuario);
    cy.get('[data-testid="checkbox"]').click();
    cy.get('[data-testid="cadastrarUsuario"]').click();
    cy.wait(2000);
  });

  it('TC 003 TESTANDO FUNCIONALIDADE HOME ', () => {
    cy.wait(2000);
    cy.get('[data-testid="home"]').should('be.visible').click();
  });
  it('TC 004 TESTANDO FUNCIONALIDADE LOGOUT', () => {
    cy.get('[data-testid="logout"]').click();
    
  });
  it('TC005 TESTANDO FUNCIONALIDADE LOGIN', () => {
    cy.get('[data-testid="email"]').type(email);
    cy.get('[data-testid="senha"]').type(senha);
    cy.get('[data-testid="entrar"]').click();
    
  });
  
  it('TC 005 TESTANDO FUNCIONALIDADE LISTAR USUÁRIOS', () => {
     cy.wait(2000);
     cy.get('[data-testid="listar-usuarios"]').should('be.visible').click();
    
  });
  it('TC 006 TESTANDO FUNCIONALIDADE EXCLUIR USUARIO > LISTA DE USUARIOS', () => {
    cy.wait(2000);
    cy.get(':nth-child(1) > :nth-child(5) > .row > .btn-danger').click();
  });

  it('TC 007 TESTANDO FUNCIONALIDADE CADASTRO DE PRODUTOS', () => {
    

    cy.get('[data-testid="cadastrar-produtos"]').click();
    cy.wait(2000);
    
    cy.get('[data-testid="nome"]').type(nomeProduto);
    cy.get('[data-testid="preco"]').type(preco);
    cy.get('[data-testid="descricao"]').type(descricao);
    cy.get('[data-testid="quantity"]').type(quantidade);
    cy.get('[data-testid="imagem"]').attachFile('images.png');
    cy.get('[data-testid="cadastarProdutos"]').click();
  });

  it('TC 008 TESTANDO FUNCIONALIDADE EXCLUIR PRODUTO > LISTA DE PRODUTOS', () => {
    cy.get(':nth-child(1) > :nth-child(6) > .row > .btn-danger').click();
    
  });
  it('TC 009 TESTANDO FUNCIONALIDADE RELATÓRIOS', () => {
    cy.get('[data-testid="link-relatorios"]').click();
    
  });
  it('TC 010 TESTANDO FUNCIONALIDADE CADASTRAR USUÁRIOS COMUM DADOS VALIDOS', () => {

    cy.wait(2000);
    cy.get('[data-testid="home"]').should('be.visible').click();
    cy.get('[data-testid="cadastrar-usuarios"]').click();
    cy.get('[data-testid="nome"]').type(nomeUsuarioSecundario);
    cy.get('[data-testid="email"]').type(emailUsuarioSecundario);
    cy.get('[data-testid="password"]').type(senhaUsuarioSecundario);
    cy.get('[data-testid="cadastrarUsuario"]').click();
  });

  it('TC 000 TESTANDO FUNCIONALIDADES COMO USUARIO COMUM', () => {
    cy.wait(2000);
    cy.get('[data-testid="logout"]').click();
    cy.get('[data-testid="email"]').type(email);
    cy.wait(1000);
    cy.get('[data-testid="entrar"]').type(senha);
    cy.get('[data-testid="entrar"]').click();
  });


});
