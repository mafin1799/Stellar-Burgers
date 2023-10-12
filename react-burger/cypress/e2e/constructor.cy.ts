import { STELLAR_BERGER_API } from '../../src/utils/const';

describe("Страничка конструктора", () => {
    beforeEach(() => {
        cy.intercept("POST", `${STELLAR_BERGER_API}/orders`).as("postOrder");
        cy.intercept("POST", `${STELLAR_BERGER_API}/auth/login`).as("login");
        cy.intercept("GET", `${STELLAR_BERGER_API}/ingredients`).as("getIngredients");
        cy.visit("http://localhost:3000/login");
        cy.get("[name^=email]").type("nik.chujko@mail.ru");
        cy.get("[name^=password]").type("952410");
        cy.get("button").contains("Войти").click();
        cy.wait("@login");
    });

    it("открытие попапа с ингридиентом", () => {
        cy.wait("@getIngredients");
        cy.contains("Краторная булка N-200i").click();
        cy.get("button").click();
    });

    it("работа оформления заказа", () => {
        cy.visit("http://localhost:3000");
        cy.viewport(1920, 1080) // Set viewport to 550px x 750px
        cy.contains("Мясо").as("main");
        cy.contains("булка").as("bun");
        cy.get("[id^=constructor]").as("constructor");
        cy.get("@bun").trigger("dragstart");
        cy.get("@constructor").trigger("drop");
        cy.get("button").contains("Оформить заказ").as("submit");
        cy.get("@main").trigger("dragstart");
        cy.get("@constructor").trigger("drop");
        cy.get("@submit").click().wait("@postOrder");
        cy.get("[type^=reset]").click();
    });
});

export { };