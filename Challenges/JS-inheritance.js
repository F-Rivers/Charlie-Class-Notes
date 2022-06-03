// Object Oriented Programming - OOP 
// leverages the philosophical concept of the realm of forms to allow us to create classes that instantiate individual objects

// Inheritance 
    //Classes can be representative of ideas but 

    // parent classes information only flows downstream toward the children 
    // children do not share information with one another 
    // children cannot pass their information to their parents 

    //         animal 
    //        /     \
    // Reptile     Mammal

    // parent class of animal 
    // common: 
    // are alive 
    // can die 
    // eat 
    // has organs 

    class Animal{
        constructor(nameParam){ 
            this.isAlive = true 
            this.hungry = true
            this.name = nameParam 
        }
        eat(){
            if (this.isAlive === true) {
                this.hungry = false
                return ("You are eating")
            } else {
                return ("You are already full")
            }
        }
        death(){
            this.isAlive = false 
            console.log("You are dead")
        }
    }

    // inheritance syntax is the keyword EXTENDS 
    //           new keyword 
    //               V
    class Reptile extends Animal{
        constructor(reptileNameParam, venomBoolean, poisonBoolean){
            super(reptileNameParam)
             // new keyword: super 
        // in charge of running the parents constructor method 
        this.isVenomous = venomBoolean
        this.isPoisonous = poisonBoolean
        }
    }

   let aligator = new Reptile("Aligator", false, false)

console.log(aligator)


// Mammal 
    // warm blood 
    // mammary glands 
    // lungs
    // can be aquatic --boolean
    // sweat glands -- boolean
    // fuzzy -- boolean
    // flight 

class Mammal extends Animal {
    constructor (mammalNameParameter, aquaParam=false, fuzzyParam=true){
        super(mammalNameParameter)
        this.warmBlooded = true 
        this.isAquatic = aquaParam
        this.isFuzzy = fuzzyParam
    }
    movement(){
        if (this.isAquatic === true){
        return ("Just Keep Swimming")}
        else {
            return ("Just walk on those little legs")
        }
    }
}

// let sheldon = new Mammal("Booger")
// console.log(sheldon)

var orca = new Mammal("Shamu", true, false)
console.log(orca)
console.log(orca.eat())
console.log(orca.eat())
console.log(orca.death())
console.log(orca)

var capybara = new Mammal("Jorge")
console.log(capybara)
console.log(capybara.eat())
console.log(capybara)
console.log(capybara.movement)
console.log(capybara)


//-----------------------------------------------------------------------------------------

class Car {
    constructor(modelParam, yearParam, colorParam) {
        this.wheels = 4 
        this.model = modelParam
        this.year = yearParam 
        this.color = colorParam
    }
}

class Tesla extends Car {
    constructor(modelParam, yearParam, colorParam="Silver"){
        super(modelParam, yearParam, colorParam)
    }
}
let myTesla = new Tesla ("Model S", 2022)

console.log(myTesla)

