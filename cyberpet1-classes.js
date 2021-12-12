

export class pet {
    constructor(name){
    this.name = name
    this.hunger = 100
    this.thirst = 100
    this.happiness = 100
    this.energy = 100
    this.toilet = 100
    this.hygiene = 100
    }
    }
    
    export class siberianTiger extends pet{
    
    constructor(name, tigerHunt, tigerGroom, tigerPlay){
        super(name)
        this.tigerHunt = 0
        this.tigerGroom = 0
        this.tigerPlay = 0
    }
    }
    
    export class redPanda extends pet {
    constructor(name, redPandaScareOff, redPandaPlay, redPandaChill){
        super(name)
        this.redPandaScareOff = 0
        this.redPandaPlay = 0
        this.redPandaChill = 0
    }
    }
    
    export class sloth extends pet {
    constructor(name, slothScratch, slothPaddle, slothHang){
        super(name)
        this.slothScratch = 0
        this.slothPaddle = 0
        this.slothHang = 0
    }
    }
    
    


    let pet1 = new siberianTiger("Dylan")
    let pet2 = new redPanda("George")
    let pet3 = new sloth("Nash")
    
