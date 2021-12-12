const inquirer = require("inquirer")
const { initQuestions } = require("./init-questions.js")
const { alien } = require("./alien-classes")

let myAlien

const init = () => {
    inquirer
    .prompt(initQuestions)
    .then((answers) => {
        console.log(answers)
        myAlien = new alien(answers.name, answers.type)
    })
        .then(() => gameLoop())
        .catch((error) => {
            console.log(error)
        })

}

const gameLoop = () => {

    if (myAlien.darkEnergy >= 150) {
        console.log("Too much dark energy, the universe has imploded!")
        return
    } if (myAlien.spacePollution >= 150) {
            console.log("Too much space pollution, all equipment has broken!")
            return
    }

    inquirer
    .prompt([
        {
            type: "list",
            name: "action",
            message: "What do you want to do?",
            choices: [
                "Capture galaxy destroyer and save ancient civilisation.",
                "Make trade with The Greys and swap humans for new technologies.",
                "Initiate portal and escape to faraway land for 10 days.",
                "Harvest dark energy into super powerful pollution cleaner."]

        }
    ])
    .then ((answer) => {
        if (answer.action === "Capture galaxy destroyer and save ancient civilisation.") {
            myAlien.capture()
        } else if (answer.action === "Make trade with The Greys and swap humans for new technologies.") {
            myAlien.trade()
        } else if (answer.action === "Initiate portal and escape to faraway land for 10 days.") {
            myAlien.portal()
        } else {
            myAlien.harvest()
        }

    })

    .then(() => gameLoop())

}

init()