/// <reference types ="Cypress"/>
describe('as Homework test', () => {
    it('calculate the total price for items have one price for mens-tops-hodies and jacket gear - bags', () => {
        cy.visit("https://magento.softwaretestingboard.com/");
        cy.get("a[href*='softwaretestingboard.com/']").as('firstlink')
        cy.get('@firstlink').contains("Gear").click()
        cy.get('.item').as('secondlink')
        cy.get('@secondlink').contains("Bags").click()
        cy.get('.product-item-info').as("items")
        cy.get('@items').find('.price').invoke('text').as('itemprice')
        cy.get('@itemprice').then((pricetext) => {

            let Mylistofprices = pricetext.split("$")
            let total = 0
            for (let i = 0; i < Mylistofprices.length; i++) {
                cy.log(Mylistofprices[i])
                total += Number(Mylistofprices[i])
            }
            cy.log("thi is the total    " + total)
        })
    });
});
