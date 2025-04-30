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

    it(' ACESSANDO PAGE LOGIN', () => {
        cy.visit('/');
    });

    it('TC 021 EXCLUINDO LISTA DO CARRINHO ', () => {


        cy.get('[data-testid="cadastrar"]').click();
        cy.get('[data-testid="nome"]').type(nome);
        cy.get('[data-testid="email"]').type(email);
        cy.get('[data-testid="password"]').type(senha);

        cy.get('[data-testid="cadastrar"]').click();
        cy.wait(2000);
        cy.get('.alert-link').contains("Cadastro realizado com sucesso");

    });
    it('ADICIONANDO PRODUTOS NO CARRINHO', () => {
        cy.get(':nth-child(1) > .card-body > div > [href="/minhaListaDeProdutos"] > [data-testid="adicionarNaLista"]').click();
        cy.get('[data-testid="adicionar carrinho"]').click();
        cy.wait(1000);
        
    });
    it('EXCLUINDO LISTA DE PRODUTOS DO CARRINHO', () => {
        cy.get('[data-testid="lista-de-compras"]').click();
        cy.get('[data-testid="limparLista"]').click();

    });

});