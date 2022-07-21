class staff {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  insertStaffName() {
    return this.name;
  }

  insertStaffID() {
    return this.id;
  }
  insertStaffEmail() {
    return this.email;
  }
  insertStaffPosition() {
    return "staff";
  }
}

module.exports = staff;
