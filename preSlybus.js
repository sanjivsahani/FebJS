// console.log("hello js Previous session")
// // +
// // Math oprtor
// console.log(5+3)
// console.log(5-3)
// console.log(5*4)
// console.log(8/2)

// // asignment oprator 

// //  =  asign 
// let a = 5 ; 
// console.log(a)
// //  ==  compare the value 
// let b = 7 
// console.log(a == b)
// /// === 
// console.log(a === b)
// // >  
// // < 
// console.log(a<b)

// // //  if(condtion){

// // }else{
// //     return 
// // }

// function getValue (frist,second){
//     if(frist>second){
//         return "this is grater"
//     }else{
//         return "this is lesser"
//     }

// }
// // let frist = 6 ;
// // let second = 9
// // getValue(frist,second)
// console.log(getValue(frist,second))

// conditional ; 


const cal = (frist, oprator, second) => {


    if (oprator === 'add') {
        return frist + second
    }

    else if (oprator === "sub") {
        if (frist < second) {
            return "the frist value is lesser then second "
        } else {
            return frist - second
        }
    }
    else if (oprator === "multiple") {
        return frist * second
    } else if (oprator === "div") {
        return frist / second
    }
    else {
        return "this is invlaid oprator "
    }

}
// let frist = Number(prompt("enter a frist "))
// let oprator = prompt("enter a opt")
// let second =  Number(prompt("enter a second"))
// alert("thisi is deleted")
// confirm("do you want to delete")



let frist = 14;
let second = 9;
let oprator = "sub"

// console.log(cal(frist, oprator, second))

// the for loop 
//  for(let i = 0 ; i<arr.length;i++)

function makeAbreake(arr) {
    for (let i = 0; i < arr.length; i++) {
        // if(arr[i] == 9)
        // // continue ;
        // break ;
        // console.log(arr[i])
        return i

    }

}
let arr = [1, 5, 8, 9, 6, 4]

console.log(makeAbreake(arr))

//  &&   == 
//  || 
//  ? 
//  

let x = 8;
let y = 9;

console.log((x < y) ? "this is satisfyed condion " : " none")

// function findValue (value){
//     if((value == 9 || value == 10)){
//         console.log(value)
//         return "this is passed"
//     }
//     return "none"

// }
// let value = 9; 
// console.log (findValue(value))

function findlogicaland(value1, vlaue2) {
    if (value1 == 10 && vlaue2 == 11) {
        return "this is passed"
    }
    return "none"
}
let value1 = 10;
let vlaue2 = 11;
console.log(findlogicaland(value1, vlaue2))

 
console.log(new Date().getDay())
// let index = Number(prompt("enter a number between 1  to 7 "))
let index = 6;

let day;
switch (index) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "adsjfhljaskhdfkjadsfhkadsjfhlkjadsfh;";
    break;
  case  6:
    day = "Saturday";
}
// document.getElementById("demo").innerHTML = "Today is " + day;
console.log(day)
 