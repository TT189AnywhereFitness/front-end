/* eslint-disable jest/valid-expect */
/* eslint-disable no-undef */
describe("login", () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000/login");
    });
    it("sanity checks", () => {
      expect(42).to.equal(42);
    });
    const login = () => cy.get("#login");
  
    describe("login exists", () => {
      it("login component exists", () => {
        login().should("exist");
      });
    });
  });