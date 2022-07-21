const staff = require("./staff");

class Manager extends staff {
  constructor(name, id, email, officePhone) {
    super(name, id, email);
    this.officePhone = officePhone;
  }

  insertStaffPosition() {
    return "Manager";
  }

  getofficePhone() {
    return this.officePhone;
  }

  writeHTML() {
    let newHTML = `<div class="card">
          <div class="box-top">
              <span class="box-top-text">Name : ${this.insertStaffName()}</span>
              <span class="box-top-text">Position : ${this.insertStaffPosition()}</span>
            </div>

            <div class="card-body">
              <span class="box-text1">ID: ${this.insertStaffID()}</span>
              <span class="box-text">Pnone: ${this.getofficePhone()}</span>
              <a href="mailto: ${this.insertStaffEmail()}" class="box-text">Email</a>
          </div>
      </div>
    `;
    return newHTML;
  }
}

module.exports = Manager;
