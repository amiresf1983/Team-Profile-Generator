const staff = require("../lib/staff");

describe("staff", () => {
  describe("insertStaffName", () => {
    it("It should show the name of an staff class object", () => {
      const newstaff = new staff("Maz", 1, "maz@company.com");
      expect(newstaff.insertStaffName()).toEqual("Maz");
    });
  });

  describe("insertStaffID", () => {
    it("It should show the ID of an staff class object", () => {
      const newstaff = new staff("Maz", 1, "maz@company.com");
      expect(newstaff.insertStaffID()).toEqual(1);
    });
  });

  describe("insertStaffEmail", () => {
    it("It should show the Email of an staff class object", () => {
      const newstaff = new staff("Maz", 1, "maz@company.com");
      expect(newstaff.insertStaffEmail()).toEqual("maz@company.com");
    });
  });

  describe("insertStaffPosition", () => {
    it("It should show the Position of an staff class object", () => {
      const newstaff = new staff("Maz", 1, "maz@company.com");
      expect(newstaff.insertStaffPosition()).toEqual("staff");
    });
  });
});
