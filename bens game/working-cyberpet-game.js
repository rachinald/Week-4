const inquirer = require("inquirer")
const { initQuestions } = require("./initQuestions")
const { pet } = require("./pet")

let myPet

const init = () => {
  inquirer
    .prompt(initQuestions)
    .then((answers) => {
      // Use user feedback for... whatever!!
      console.log(answers)
      myPet = new pet(answers.name, answers.type)
    })
    .then(() => gameLoop())
    .catch((error) => {
      console.log(error)
    })
}

const gameLoop = () => {
  //   console.log(myPet)

  if (myPet.health <= 0) {
    console.log("Nooo! Your pet died! :( ")
    return // if condition is met the function will end here
  }

  if (myPet.happiness <= 0) {
    console.log("Nooo! Your pet got too sad!")
    return // if condition is met the function will end here
  }

  //   myPet.degradeValues()

  inquirer
    .prompt([
      {
        type: "list",
        name: "action",
        message: "What do you want to do?",
        choices: ["Feed", "Drink", "Play", "Bathe", "Visit vet"],
      },
    ])
    .then((answer) => {
      if (answer.action === "Feed") {
        myPet.feed()

      } else if (answer.action === "Drink") {
        myPet.drink()

      } else if (answer.action === "Play") {
          myPet.play()

        } else if (answer.action === "Bathe") {
          myPet.bathe()

        } else if (answer.action === "Visit vet") {
          myPet.vet()
        
        }})

    .then(() => gameLoop())
}

init()