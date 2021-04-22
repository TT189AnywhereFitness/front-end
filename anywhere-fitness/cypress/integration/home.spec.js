/* eslint-disable jest/valid-expect */
/* eslint-disable no-undef */
describe("Home component", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/home");
  });
  it("sanity checks", () => {
    expect(42).to.equal(42);
  });
  const home = () => cy.get("#home");

  describe("Home exists", () => {
    it("Home component exists", () => {
      home().should("exist");
    });
  });
});
