console.log("hello java script")

// primitive Data Types
//  1. string
// 2. Number
// 3. Bollean
// 4. null
// 5. Undefined

//  1. String 
//  rules of string 
//  ""  ''
console.log("string")
//  check type 
console.log(typeof ("hello"))

//  2. Number 
// 0-9 
//  2.10
//  3
console.log(123)
//  check type 
console.log(typeof (123))
console.log(("1" + "3"))
console.log(1 + 3)

//  Bollean
// theere has 2 value
// true , false 
console.log(typeof (Boolean))
console.log(typeof (true))

//  null 
//  null is a intentionaly given value where the value is nothing 
console.log(typeof (null))

// undefined 
// js nautural behavior 
console.log(undefined)
console.log(typeof (undefined))

// Non primitive Data Types 
// 1. array 
// 2. Object 
// 3. Function  

// 1. array = is a collection of datatypes
// [] == Symbol of an array 

// console.log(["sanjiv",123,null,undefined,true,false]) // example of dynamic type 
console.log([1, 5, 7, 8, 4, 5])
// index are the position of the element 
//  which start from the 0
console.log(typeof ([1, 5, 7, 8, 4, 5]))

//  objcet
// { } = symbol of a object
{
    name: "sanjiv sahani";
    add: "kolkata";
    phone: 1454754840;
    male: true;
}

//  function 
//  normla function 

function addVlaue(value) { // parms
    console.log("it is the add value", value)
}
addVlaue(5) // agrs


function WriteName() {
    console.log("my name is sanjiv sahani")
}
WriteName()

// console.log(typeof(addVlaue))

//  varaiable 
// there are the 3 way to create a valriable 
// 1. var  --- very old method so avoid please using var 
// 2. let 
// 3. const 

// var fullName = "lucky hudda"
// var fullName = "sanjiv sahani"
// var greetmassage = "welcome to the Js world"
// console.log(fullName,greetmassage)

// 2. let 
let fullName = "lucky hudda"
fullName = "sanjiv sahani"
let greetmassage = "welcome to the Js world"
console.log(fullName, greetmassage)

// const 
const fristname = "kartik"
console.log(fristname, greetmassage)

// concat 

let str = "hello js "
let str2 = "i am learningn js "
let finalStr = str + str2
console.log(finalStr)
console.log("hello js " + "i am learnign js ")
console.log("hello js ", "i am learnign js ")


//  template litral 
let full_Name = "anil";
let age = 22;
let hobbie = "codding";
let devloper = true;
let Bio = `the Devloper name ${full_Name} and the age ${age} hobbies are the ${hobbie} , is he a good devloper ${devloper}`

console.log(Bio)

// string metods
//  length  of a string  
let a = "apple"
console.log(a.length)
console.log(a.slice)

// slice method  
console.log(a.slice(2))

// toUppperCase ()

let fruitName = "banana"
console.log(fruitName.toUpperCase())

let flawerName = "ROSE"
console.log(flawerName)

console.log(flawerName.toLowerCase())

let story = "hei! i am there"
console.log(story)
let index = 10
console.log(story.charAt(5))
console.log(story.lastIndexOf('i'))
console.log(story.endsWith("l"))
console.log(story.startsWith("K"))
console.log(story.includes("somtniing"))
console.log(story.concat("this is a new line"))
console.log(story.split(5))



var object = {
    12e34: 42
};

let obj = {
    12e34: 42,
    1: "hello",
    true: 'true',
    null: "null"
}
let keyType = Object.keys(obj)
console.log(keyType)
console.log(typeof (keyType[0]))

let person_name = ['sanjiv', 'kiran', 'karan', 'mihir', 'mahir', 'bipin', 'nitish']
let greet_msg = 'good morning'
function greetmassage_name(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(`hello ${arr[i]} ${greet_msg}`)
    }
}
greetmassage_name(person_name)
 