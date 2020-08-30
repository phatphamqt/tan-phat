let message="Coding is great"

console.log(message)

let studentCount=0

console.log(studentCount)

message="Coding might not be easy, but still great"

console.log(message)

studentCount=18

console.log(studentCount)

let lowMessage= message.toLowerCase()

console.log(lowMessage)

studentCount=studentCount + 1

console.log(studentCount)
//5
alert("You look good today!")
//6
let userName= prompt("What's your name?")

alert("Hi " + userName)
//7
let userFirstName =prompt("Enter your first name")

let userLastName =prompt("Enter your last name")

alert("Hi " + userLastName+ " " + userFirstName)
//8
let squarelength =prompt("Enter side length of the square")

("The square areas is " + squarelength)
//9
let circleRadius =prompt("Enter radius of the circle")

let circleArea =Math.round(((Math.pow(circleRadius,2)*Math.PI))+Number.EPSILON)*100/100

alert("The circle areas is " + circleArea )
//10
let tempCelcius = prompt("Enter the temperature in Celcius:")
let tempF =33.8
alert(tempCelcius + " (C) =" + (tempCelcius*tempF) + " (F)" )

