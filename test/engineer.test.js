const Engineer = require("../lib/engineer");

describe("Engineer", () => {
  describe("insertStaffName", () => {
    it("It should show the Engineer name", () => {
      const engineer = new Engineer(
        "Akbar",
        2,
        "akbar@company.com",
        "akbar123"
      );
      expect(engineer.insertStaffName()).toEqual("Akbar");
    });
  });

  describe("insertStaffID", () => {
    it("It should show the Engineer ID", () => {
      const engineer = new Engineer(
        "Akbar",
        2,
        "akbar@company.com",
        "akbar123"
      );
      expect(engineer.insertStaffID()).toEqual(2);
    });
  });

  describe("insertStaffEmail", () => {
    it("It should show the Engineer Email address", () => {
      const engineer = new Engineer(
        "Akbar",
        2,
        "akbar@company.com",
        "akbar123"
      );
      expect(engineer.insertStaffEmail()).toEqual("akbar@company.com");
    });
  });

  describe("insertStaffPosition", () => {
    it("It should show the Engineer position", () => {
      const engineer = new Engineer(
        "Akbar",
        2,
        "akbar@company.com",
        "akbar123"
      );
      expect(engineer.insertStaffPosition()).toEqual("Engineer");
    });
  });

  describe("insertGithub", () => {
    it("It should show the Engineer Github profile", () => {
      const engineer = new Engineer(
        "Akbar",
        2,
        "akbar@company.com",
        "akbar123"
      );
      expect(engineer.insertGithub()).toEqual("akbar123");
    });
  });

  describe("writeHTML", () => {
    it("It should show the HTML with Engineer data", () => {
      const engineer = new Engineer(
        "Akbar",
        2,
        "akbar@company.com",
        "akbar123"
      );

      const newData = `
            <div class="card">
                <div class="box-top>
                    <span class="box-top-text">Name : ${engineer.insertStaffName()}</span>
                    <span class="box-top-text">Position : ${engineer.insertStaffPosition()}</span>
                </div>
                <div class="card-body">
                    <span class="box-text1">ID: ${engineer.insertStaffID()}</span>
                    <span class="box-text">GitHub: <a href="https://github.com/${engineer.insertGithub()}">${engineer.insertGithub()}</a> </span>
                    <a href="mailto: ${engineer.insertStaffEmail()}" class="box-text">Send Email</a>
                </div>
            </div>
            `;
      expect(newData).toMatch(/Akbar/);
      expect(newData).toMatch(/2/);
      expect(newData).toMatch(/Engineer/);
      expect(newData).toMatch(/akbar123/);
    });
  });
});
