describe('Checking how Contains works', () => {
  it('cy-Contains', () => {
    cy.visit('https://next.privat24.ua?lang=en')
    cy.get('[data-qa-node="walletWidget"]')
        .contains('Show')
        .click()
  })
})