//1
//1.1
//var is old way to declare before let and const.
//const is like let but you cannot redefine it once declared.
//1.2
//let is block scope while var can be globally scope of functional scope
//let can be redefine but not redeclare while var can do both
//let is not initialized  while var is initialized as undefined
//1.3
//the difference is let can be redefined but const cannot.
//1.4
//var should be used at the beginning of the script
//let should be used within the block scope
//const should be used to declare unchange variables
//2
//2.1
//Boolean is a data type that has only 2 values true or false
//results will be true or false.


// //3a
// for(let input=0; input<7; input++){
// console.log(input)
// }


// //3b
// let inputNumb =prompt("Enter a number:")

// for(input=0;input<inputNumb; input++){
// console.log(input)
// }


// //3c
// inputNumb =prompt("Enter n:")

// for(input=3;input<inputNumb;input++){
//     console.log(input)
// }


// //3d
// let inputc=prompt("Enter c")
// let inputn=prompt("Enter n")

// for(input=inputc;input<inputn;input++){
//     console.log(input)
// }


// //3e
// inputc=Number(prompt("Enter c"))
// inputn=Number(prompt("Enter n"))
// console.log(typeof inputc)
//     for(let input=inputc;input<inputn;input+=3){
//       console.log(input)
// }


// //3f
// let inputs=Number(prompt("Enter s"))
// inputc=Number(prompt("Enter c"))
// inputn=Number(prompt("Enter n"))
// for(let input=inputc;input<inputn;input+=inputs){
//     console.log(input)
// }


// //4
// inputn=Number(prompt("You want to calculate the factorial of:"))
// function factorial(inputn){  
//   let answer = 1;
//   if (inputn == 0 || inputn == 1){
//     return answer;
//   }else{
//     for(let i = inputn; i >= 1; i--){
//       answer = answer * i;
//     }
//     return answer;
//   }  
// }
// answer = factorial(inputn)
// console.log("The factorial of " + inputn + " is " + answer);


// //5
// let age=prompt("How old are you?")
// if(age!=Number && age < 14){alert("Grow older and come back!")

// }else{
//     alert("Enjoy!")
// }


// //6
// let halfCheck=Number(prompt("What you want to check"))
// if(halfCheck > 4.5 && halfCheck < 9){
// alert("Your number is higher half of 9")
// }else{
//     if(halfCheck > 0 && halfCheck < 4.5){
//         alert("Your number is lower half of 9")
//   }
// }{alert("Your number is not correct!")}


// //7
// let numberx=Number(prompt("Number to check x="))
// let numbern=Number(prompt("Check x with this n="))
// if( numberx=Number && numberx <= (numbern/2)){
//   alert(`Your ${numberx} is lower half of ${numbern} `)
// }else{
//   if (numberx=Number && numberx >= (numbern/2)){
//     alert(`Your ${numberx} is higher half of ${numbern}`)
//   }
// }alert("Your number is incorrect!")


//8
// let numbCheck=Number(prompt("Check this number wether its even or odd:"))
// let x=numbCheck%2
// if(x=0){
//   alert("It's even!")}
// {

// if(x=1){
//   alert("It's odd!")} 
//   }


// //9

// for(let i=0;i<3;i++){
// console.log("L")
// console.log("H") }


//9b
// let n=Number(prompt("Enter n:"))
// console.log(n)
//   if(n%2 ==0){
//     for(i=0;i<n/2;i++){ 
//     console.log("L")
//   }
//   for(i=0;i<n/2;i++){
//     console.log("H")
//   }
// else{
//   for(i=0;i<n/2;i++){
//     console.log("L")
//   }
//   for(i=0;i<n/2 -1;i++){
//     console.log("H")
//   }
// }
//9c
// for(i=0;i<4;i++){
//   console.log("1")
//   console.log("0")
// }
//9d
// let n=prompt("Enter n:")
// if(n%2==0){
//   for(i=0;i<n/2;i++){
//     console.log("0")
//     console.log("1")
//   }
// }else{
//   for(i=0;i<n/2 -1;i++){
//     console.log("0")
//     console.log("1")
//   }
//   console.log("0")
// }

//10
// let heightcm=Number(prompt("Tell me your height (cm)"))
// let height=heightcm/100
// let weight=Number(prompt("Tell me your weight (kg)"))
// let BMI=weight/(height*height)

// if(BMI<=16 && BMI>0){
//   alert("Severely underweight")
// }else if(BMI>16 && BMI<=18.5){
//   alert("Underweight")
// }else if(BMI>18.5 && BMI<=25){
//   alert("Normal")
// }else if(BMI>25 && BMI<=30){
//   alert("Overweight")
// }else{
//   alert("Obese")
// }

//11
