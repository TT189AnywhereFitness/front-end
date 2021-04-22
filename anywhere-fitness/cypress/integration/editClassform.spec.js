/* eslint-disable jest/valid-expect */
/* eslint-disable no-undef */
describe("EditClassForm component", () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000/editClassForm");
    });
    it("sanity checks", () => {
      expect(42).to.equal(42);
    });
    const editClassForm = () => cy.get("#editClassForm");
  
    describe("editClassForm exists", () => {
      it("editClassForm component exists", () => {
        editClassForm().should("exist");
      });
    });
  });