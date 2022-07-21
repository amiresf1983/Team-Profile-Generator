const staff = require("./staff");

class Engineer extends staff {
  constructor(name, id, email, gitHub) {
    super(name, id, email);
    this.gitHub = gitHub;
  }

  insertStaffPosition() {
    return "Engineer";
  }

  insertGithub() {
    return this.gitHub;
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
              <span class="box-text">GitHub: <a href="${this.insertGithub()}">${this.insertGithub()}</a> </span>
              
              <a href="mailto: ${this.insertStaffEmail()}" class="box-text">Email</a>
          </div>
      </div>
    `;
    return newHTML;
  }
}

module.exports = Engineer;
