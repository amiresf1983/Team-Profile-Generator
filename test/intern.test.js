const Intern = require("../lib/intern");

describe("Intern", () => {
  describe("insertStaffName", () => {
    it("It should show the Intern name", () => {
      const newIntern = new Intern("Hossein", 3, "Hossein@company.com", "UTS");
      expect(newIntern.insertStaffName()).toEqual("Hossein");
    });
  });

  describe("insertStaffID", () => {
    it("It should show the Intern ID", () => {
      const newIntern = new Intern("Hossein", 3, "Hossein@company.com", "UTS");
      expect(newIntern.insertStaffID()).toEqual(3);
    });
  });

  describe("insertStaffEmail", () => {
    it("It should show the Intern Email address", () => {
      const newIntern = new Intern("Hossein", 3, "Hossein@company.com", "UTS");
      expect(newIntern.insertStaffEmail()).toEqual("Hossein@company.com");
    });
  });

  describe("insertStaffPosition", () => {
    it("It should show the Intern position", () => {
      const newIntern = new Intern("Hossein", 3, "Hossein@company.com", "UTS");
      expect(newIntern.insertStaffPosition()).toEqual("Intern");
    });
  });

  describe("getSchool", () => {
    it("It should show the Intern school", () => {
      const newIntern = new Intern("Hossein", 3, "Hossein@company.com", "UTS");
      expect(newIntern.getSchool()).toEqual("UTS");
    });
  });

  describe("writeHTML", () => {
    it("It should show the HTML with intern data", () => {
      const newIntern = new Intern("Hossein", 3, "Hossein@company.com", "UTS");
      const newData = `
            <div class="card">
            <div class="card-op">
                <span class="box-top-text">Name : ${newIntern.insertStaffName()}</span>
                <span class="box-top-text">Position : ${newIntern.insertStaffPosition()}</span>
            </div>
            <div class="card-body">
                <span class="box-text1">ID: ${newIntern.insertStaffID()}</span>
                <span class="box-text">School: ${newIntern.getSchool()}</span>
                <a href="mailto: ${newIntern.insertStaffEmail()}" class="box-text">Send Email</a>
            </div>
            </div>
            `;

      expect(newData).toMatch(/Hossein/);
      expect(newData).toMatch(/3/);
      expect(newData).toMatch(/Intern/);
      expect(newData).toMatch(/UTS/);
    });
  });
});
