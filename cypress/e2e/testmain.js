/// <reference types ="Cypress"/>
describe('as Homework test', () => {
    it('calculate the total price for items have one price for mens-tops-hodies and jacket gear - bags', () => {
        cy.visit("https://magento.softwaretestingboard.com/");
        cy .get("a[href*='softwaretestingboard.com/']").as('firstlink')
        cy.get('@firstlink').contains("Men").click()
        cy.get('.item').as('secondlink')
        cy.get('@secondlink').contains("Hoodies & Sweatshirts").click()
        // cy.get("select") .select('36', { force: true })
        // .invoke('val')
        // .should('eq', '36')
        //cy.get('select').select(2).should('have.value','36')
        //cy.get('select#limiter option:selected').should('have.text', '36')
         // cy.get("div[class='control']").wait(5000).select('36',{ force: true }).should('have.value', '36');
       // cy.get('select#limiter option:selected').should('have.text', '36')
       //cy.document.getElementsByClassName("limiter-options")[0].selectedIndex = 2
       cy.get("#limiter").wait(5000).select('36', {force: true});
       cy.get('.product-item-info').as("items")
        cy.get('@items').find('.price').invoke('text').as('itemprice')
        cy.get('@itemprice').then((pricetext)=>{

           let Mylistofprices= pricetext.split("$")
           let total= 0
           for(let i=0;i<Mylistofprices.length;i++){
cy.log(Mylistofprices[i])
total+=Number(Mylistofprices[i])
           }
           cy.log("this is the total price for Top    "+total)
        }) 
        cy .get("a[href*='softwaretestingboard.com/']").as('fourthlink')
        cy.get('@fourthlink').contains("Home").click()
        
        cy.get("a[href*='softwaretestingboard.com/']").as('fifthlink')
        cy.get('@firstlink').contains("Gear").click()
        cy.get('.item').as('secondlink')
        cy.get('@secondlink').contains("Bags").click()
        cy.get('.product-item-info').as("items")
        cy.get('@items').find('.price').invoke('text').as('itemprice')
        cy.get('@itemprice').then((pricetextb) => {

            let MylistBag = pricetextb.split("$")
            let total2 = 0
            for (let i = 0; i < MylistBag.length; i++) {
                cy.log(MylistBag[i])
                total2 += Number(MylistBag[i])
            }
            cy.log("this is the total price for Bags    " + total2)
        })
    });
});
