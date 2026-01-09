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
} else if (age >= 6 && age <= 17) {
    console.log("child discount")
} else if (age <= 18 && age >=26) {
    console.log("student discount")
} else if (age <= 27 && age >= 66) {
    console.log("full price")
    
} else {
    console.log("Senior citizen discount")
}
