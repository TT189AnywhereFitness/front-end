/* eslint-disable jest/valid-expect */
/* eslint-disable no-undef */
describe("AddClassForm component", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/addClassForm");
  });
  it("sanity checks", () => {
    expect(42).to.equal(42);
  });
  const addClassForm = () => cy.get("#addClassForm");

  describe("addClassForm exists", () => {
    it("addClassForm component exists", () => {
      addClassForm().should("exist");
    });
  });
});
