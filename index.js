const staff = require("./lib/staff");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const addedProfile = require("./lib/addedProfile");

const inquirer = require("inquirer");
const fs = require("fs");

class staffCreator {
  constructor() {
    this.staffs = [];
    this.staff = {};
    this.HTML = "";

    this.managerPrompts = [
      {
        type: "input",
        message: "Enter manager Name",
        name: "managerName",
      },

      {
        type: "input",
        message: "Enter manager ID",
        name: "managerID",
      },

      {
        type: "input",
        message: "Enter manager Email",
        name: "managerEmail",
      },

      {
        type: "input",
        message: "Enter manager Office Phone Number",
        name: "officePhone",
      },
    ];

    this.engineerPromptss = [
      {
        type: "input",
        message: "Enter engineer Name",
        name: "name",
      },

      {
        type: "input",
        message: "Enter engineer ID",
        name: "id",
      },

      {
        type: "input",
        message: "Enter engineer Email",
        name: "email",
      },

      {
        type: "input",
        message: "Enter engineer GitHub Username",
        name: "gitHub",
      },
    ];

    this.internPromptss = [
      {
        type: "input",
        message: "Enter intern Name",
        name: "name",
      },

      {
        type: "input",
        message: "Enter intern ID",
        name: "id",
      },

      {
        type: "input",
        message: "Enter intern Email",
        name: "email",
      },

      {
        type: "input",
        message: "Enter intern school",
        name: "school",
      },
    ];
  }

  addStaff() {
    inquirer
      .prompt(this.managerPrompts)
      .then((answers) => {
        this.staff = new Manager(
          answers.managerName,
          answers.managerID,
          answers.managerEmail,
          answers.officePhone
        );
        this.staffs.push(this.staff);
      })
      .then(() => {
        this.addStaffPrompts();
      });
  }

  addStaffPrompts() {
    let addStaffPrompts = [
      {
        type: "list",
        message: "Please choose from the following",
        name: "staffType",
        choices: ["Add Engineer", "Add Intern", "Done"],
      },
    ];

    inquirer
      .prompt(addStaffPrompts)
      .then((answers) => answers.staffType)
      .then((choice) => {
        switch (choice) {
          case "Add Engineer":
            this.addEngineer();
            break;

          case "Add Intern":
            this.addIntern();
            break;

          case "Done":
            this.createHTML();
            break;
        }
      });
  }

  addEngineer() {
    inquirer
      .prompt(this.engineerPromptss)
      .then((answers) => {
        this.staff = new Engineer(
          answers.name,
          answers.id,
          answers.email,
          answers.gitHub
        );
        this.staffs.push(this.staff);
      })
      .then(() => {
        this.addStaffPrompts();
      });
  }

  addIntern() {
    inquirer
      .prompt(this.internPromptss)
      .then((answers) => {
        this.staff = new Intern(
          answers.name,
          answers.id,
          answers.email,
          answers.school
        );
        this.staffs.push(this.staff);
      })
      .then(() => {
        this.addStaffPrompts();
      });
  }

  writeHTML() {
    let cards = "";

    for (let person of this.staffs) {
      let newCards = person.writeHTML();
      cards = cards + "\n" + newCards;
    }
    this.HTML = addedProfile.replace("newDatas", cards);
  }

  createHTML() {
    this.writeHTML();

    fs.writeFile("./dist/staff.html", this.HTML, (err) =>
      err
        ? console.log(err)
        : console.log("Successfully Done! Check staff.html!")
    );
  }
}

staffCreator = new staffCreator();
staffCreator.addStaff();
