/* eslint-disable jest/valid-expect */
/* eslint-disable no-undef */
describe("Search component", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/search");
  });
  it("sanity checks", () => {
    expect(42).to.equal(42);
  });
  const search = () => cy.get("#search");

  describe("search exists", () => {
    it("search component exists", () => {
      search().should("exist");
    });
  });
});
