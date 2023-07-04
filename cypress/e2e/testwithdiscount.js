/// <reference types ="Cypress"/>
describe('as Homework test', () => {
    it('calculate the total price for items have one price for mens-tops-hodies and jacket gear - bags', () => {
        cy.visit("https://magento.softwaretestingboard.com/");
        cy.get("a[href*='softwaretestingboard.com/']").as('firstlink')
        cy.get('@firstlink').contains("Men").click()
        cy.get('.item').as('secondlink')
        cy.get('@secondlink').contains("Hoodies & Sweatshirts").click()
        cy.get(":nth-child(5) > .field > .control > #limiter").select("36");
        cy.get('.product-item-info').as("items")
        cy.get('@items').find('.price').invoke('text').as('itemprice')
        cy.get('@itemprice').then((pricetext) => {

            let Mylistofprices = pricetext.split("$")
            let total = 0
            let discount = 0
            for (let i = 0; i < Mylistofprices.length; i++) {
                cy.log("this is the price befor discount" + Mylistofprices[i])
                cy.log("*************************************************")
                discount = Mylistofprices[i] - (Mylistofprices[i] * 10 / 100)
                cy.log("this is the price After discount  " + discount)
                cy.log("*************************************************")
            
                total += Number(Mylistofprices[i])
            }
            
            cy.log("this is the total price for Top    " + total)
        })
    });
}); 
