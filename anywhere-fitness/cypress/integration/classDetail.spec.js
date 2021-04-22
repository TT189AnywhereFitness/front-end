/* eslint-disable jest/valid-expect */
/* eslint-disable no-undef */
describe("ClassDetail component", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/classdetail");
  });
  it("sanity checks", () => {
    expect(42).to.equal(42);
  });
  const classDetail = () => cy.get("#classDetail");

  describe("classDetail exists", () => {
    it("classDetail component exists", () => {
      classDetail().should("exist");
    });
  });
});
