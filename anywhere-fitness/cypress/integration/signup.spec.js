/* eslint-disable jest/valid-expect */
/* eslint-disable no-undef */
describe("Signup component", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/signup");
  });
  it("sanity checks", () => {
    expect(42).to.equal(42);
  });
  const signup = () => cy.get("#signup");

  describe("signup exists", () => {
    it("signup component exists", () => {
      signup().should("exist");
    });
  });
});
