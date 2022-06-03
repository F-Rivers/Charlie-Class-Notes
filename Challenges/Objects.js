// Data types 
    // primitive - cannot be broken down further 
    // numbers 
    // string 
    // boolean
    // undefined
    // null 
    // symbol 
    
// Array - collection of data
// structure of an object 
    // {key: "value", key2: "value2", key3: "value3"}

const pets = {stephen:"Absalom", micheal:"chispita", jorge:"yogi"}
// console.log(pets)
// console.log(pets.micheal)

const breakfast = {
    bfast1: "waffles",
    bfast2: "eggs",
    bfast3: "bisket and gravy",
    bfast4: "nothing",
    bfast5: {
        beverage1: "coffee", 
        beverage2: "bloody mary",
        beverage3: "OJ",
        beverage4: {
            mimosa1: "guava",
            mimosa2: "pineapple",
            mimosa3: "mango",
            mimosa4: "strawberry"
        }
    }
}
//console.log(breakfast.bfast5)

// Methods are functions that belong to an object (class)
    // 'this' a keyword that references the object when inside the object
const numberObj = {
    num1: 5, 
    num2: 10,
    num3: 15, 
    addUp: function () {
        return this.num1 + this.num2 + this.num3
    }
}
console.log(numberObj.addUp()) // will execute the function output --> 30

const petsAgain = [
    {name: "absalom", age: 1, type: "dog"},
    {name: "chispita", age: 7, type: "dog"}, 
    {name: "yogi", age: 10, type: "dog"}, 
    {name: "bently", age: 1, type:"cat"}
]
console.log(petsAgain[1]) // output --> { name: "chispita", age: 7, type: "dog" }
console.log(petsAgain[2].name) // output --> yogi 


const petNames = (array) => {
    return array.map(value => {
        return value.name
    })
}
//-------------------------------------doesn't work
const onlyDog = (array) => {
    return array.filter(value => {
        return value.type === "dog"
    })
}
console.log(onlyDog(petNames))