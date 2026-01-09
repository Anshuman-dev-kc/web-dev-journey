console.log("I am learning JavaScript!")
// Revising objects and their uses
let player = {
  name = "Frog ",
  age = 10
  IsHuman = false
}

function logData() {
  console.log(player.name + "is " + player.age + " years old ")
}
// revising conditional statements
let age = 15
if (age < 6) {
    console.log("free")
} else if (age <= 17) {
    console.log("child discount")
} else if (age <=26) {
    console.log("student discount")
} else if (age <= 66) {
    console.log("full price")
    
} else {
    console.log("Senior citizen discount")
}
// revising for loops and creating arrays
let largeCountries = ["China","India","USA","Indonesia","Pakistan"]


for (let i = 0; i < largeCountries.length; i++ ) {
    console.log(largeCountries[i])
}
// learning push pop shift unshift
let largeCountries = ["Tuvalu","India","USA","Indonesia","Monaco"]

largeCountries.pop()
largeCountries.push("Pakistan")
largeCountries.shift()
largeCountries.unshift("China")
for (let i = 0; i < largeCountries.length; i++){
    console.log(largeCountries[i])
}
