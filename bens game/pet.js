class pet {
    constructor(name, type) {
      this.name = name
      this.type = type
    }
  
    health = 30
    happiness = 30
    hygiene = 30

    bathe() {
        console.log(`${this.name} is getting wet... happiness -20, hygiene +10`)
        this.hygiene += 10
        this.happiness -= 20
        console.log("Total health = ", this.health)
        console.log("Total happiness = ", this.happiness)
        console.log("Total hygiene = ", this.hygiene)
      }

    vet() {
        console.log(`${this.name} is at the vet... happiness -20, health +10`)
        this.health += 10
        this.happiness -= 20
        console.log("Total health = ", this.health)
        console.log("Total happiness = ", this.happiness)
        console.log("Total hygiene = ", this.hygiene)
      }
  
    feed() {
      console.log(`${this.name} is feeding... hunger +10, happiness -30`)
      this.health += 10
      this.happiness += 30
      console.log("Total health = ", this.health)
      console.log("Total happiness = ", this.happiness)
      console.log("Total hygiene = ", this.hygiene)
    }

    drink() {
        console.log(`${this.name} is drinking... thirst +10, happiness +10`)
        this.health += 10
        this.happiness += 10
        console.log("Total health = ", this.health)
        console.log("Total happiness = ", this.happiness)
        console.log("Total hygiene = ", this.hygiene)
      }

    play() {
        console.log(`${this.name} is playing... happiness +10, hygiene -10`)
        this.happiness += 10
        this.hygiene -= 10
        console.log("Total health = ", this.health)
        console.log("Total happiness = ", this.happiness)
        console.log("Total hygiene = ", this.hygiene)
    
      }

  }
  





  exports.pet = pet