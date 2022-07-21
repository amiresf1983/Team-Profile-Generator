const Manager = require("../lib/manager");

describe("Manager", () => {
  describe("insertStaffName", () => {
    it("It should show manager name", () => {
      const newManager = new Manager(
        "Mark",
        4,
        "Mark@company.com",
        "2233445566"
      );
      expect(newManager.insertStaffName()).toEqual("Mark");
    });
  });

  describe("insertStaffID", () => {
    it("It should show manager ID", () => {
      const newManager = new Manager(
        "Mark",
        4,
        "Mark@company.com",
        "2233445566"
      );
      expect(newManager.insertStaffID()).toEqual(4);
    });
  });

  describe("insertStaffEmail", () => {
    it("It should show manager email", () => {
      const newManager = new Manager(
        "Mark",
        4,
        "Mark@company.com",
        "2233445566"
      );
      expect(newManager.insertStaffEmail()).toEqual("Mark@company.com");
    });
  });

  describe("insertStaffPosition", () => {
    it("It should show manager position", () => {
      const newManager = new Manager(
        "Mark",
        4,
        "Mark@company.com",
        "2233445566"
      );
      expect(newManager.insertStaffPosition()).toEqual("Manager");
    });
  });

  describe("getofficePhone", () => {
    it("It should show manager office numberr", () => {
      const newManager = new Manager(
        "Mark",
        4,
        "Mark@company.com",
        "2233445566"
      );
      expect(newManager.getofficePhone()).toEqual("2233445566");
    });
  });

  describe("writeHTML", () => {
    it("It should show the HTML with manager data", () => {
      const newManager = new Manager(
        "Mark",
        4,
        "Mark@company.com",
        "2233445566"
      );

      const newData = `
          <div class="card">
            <div class="box-top">
              <span class="box-top-text>Name : ${newManager.insertStaffName()}</span>
              <span class="box-top-text>Position : ${newManager.insertStaffPosition()}</span>
            </div>
          <div class="card-body">
              <span class="box-text1">ID: ${newManager.insertStaffID()}</span>
              <span class="box-text">Phone: ${newManager.getofficePhone()}</span>
              <a href="mailto: ${newManager.insertStaffEmail()}" class="box-text">Send Email</a>
          </div>
      </div>
    `;
      expect(newData).toMatch(/Mark/);
      expect(newData).toMatch(/4/);
      expect(newData).toMatch(/Manager/);
      expect(newData).toMatch(/2233445566/);
    });
  });
});
