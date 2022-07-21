const staff = require("./staff");

class Intern extends staff {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }

  insertStaffPosition() {
    return "Intern";
  }

  getSchool() {
    return this.school;
  }

  writeHTML() {
    let newHTML = `
          <div class="card">
          <div class="box-top">
              <span class="box-top-text">Name : ${this.insertStaffName()}</span>
              <span class="box-top-text">Position : ${this.insertStaffPosition()}</span>
            </div>

            <div class="card-body">
              <span class="box-text1">ID: ${this.insertStaffID()}</span>
              <span class="box-text">School: ${this.getSchool()}</span>
              <a href="mailto: ${this.insertStaffEmail()}" class="box-text">Email</a>
          </div>
      </div>
    `;
    return newHTML;
  }
}

module.exports = Intern;
