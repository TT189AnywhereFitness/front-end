/* eslint-disable jest/valid-expect */
/* eslint-disable no-undef */
describe("HeaderNav component", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });
  it("sanity checks", () => {
    expect(42).to.equal(42);
  });
  const headerNav = () => cy.get(".navbar");

  describe("HeaderNav exists", () => {
    it("HeaderNav component exists", () => {
      headerNav().should("exist");
    });
  });
});
