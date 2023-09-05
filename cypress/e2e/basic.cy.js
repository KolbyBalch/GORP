describe('sample test', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('displays the main title', () => {
    cy.get('span')
    .contains('JOURNEY');
  })
})
