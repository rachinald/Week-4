class alien {
    constructor(name, type) {
        this.name = name
        this.type = type


    

    this.spacePollution = 100
    this.darkEnergy = 100
    this.goodVibes = 100

    }

capture() {
    this.goodVibes += 20
    this.spacePollution += 10
    this.darkEnergy -= 20
    console.log("Space Pollution:", this.spacePollution, "Dark Energy", this.darkEnergy, "Good Vibes", this.goodVibes)
}

trade() {
    this.goodVibes -= 20
    this.darkEnergy += 20
    console.log("Space Pollution:", this.spacePollution, "Dark Energy", this.darkEnergy, "Good Vibes", this.goodVibes)
}

portal() {
    this.goodVibes += 20
    console.log("Space Pollution:", this.spacePollution, "Dark Energy", this.darkEnergy, "Good Vibes", this.goodVibes)
}

harvest() {
    this.goodVibes += 10
    this.spacePollution -= 20
    this.darkEnergy -= 30
    console.log("Space Pollution:", this.spacePollution, "Dark Energy", this.darkEnergy, "Good Vibes", this.goodVibes)
}

}



exports.alien = alien