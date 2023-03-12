 
let numbers = [0, 1, 101, 2, 3, 10, 20, 30];
numbers.sort(function (a, b) {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
});

//  functions = 
// write a funnction to add two value 



// function addValue(num1, num2) {
//     // console.log(num1,num2)
//     return (num1 + num2)
// }
// let num1 = Number(prompt('enter the number 1 '));
// let num2 = Number(prompt('enter the number 2'));
// console.log(addValue(num1, num2))

// arrow funcion  = 
// const addValue = (num1, num2) => {
//     // console.log(num1, num2)
//     return num1 + num2
// }
// let num1 = 5;
// let num2 = 6;
// console.log(addValue(num1, num2))
// addValue(num1, num2)


// const findIndex = (arr)=>{
//     for(let i=0 ;i < arr.length ;i++){
//       if(arr[i] == 5){
//     //   console.log(arr[i]*3)  
//       } 
//     }

// }
// let arr = [1,5,7,8,9]
// console.log(findIndex(arr))

// let person_name  = ['dipak','pawan','asif','ganesh','neha','praveen'] 
// console.log(person_name[2])

// const win_win = (person_name)=>{
//     for(let i = 0; i < person_name.length ; i++){
//         let winCondition =Math.round( Math.random()*person_name.length)
//         if(person_name[i] === person_name[winCondition]){
//             return ` ${person_name[i]} got win `
//         }else{
//             return -1
//         }

//     }

// } 
// console.log(win_win(person_name))


// Array.prototype.at() // to find the index
// Array.prototype.concat() // to join or concat two array 
// Array.prototype.flat() // to convert two nestted array in one array 
// Array.prototype.flatMap() // to make nested array in one array ( call bcak)
// Array.isArray() // to check an array 
// Array.prototype.join() // to join an array  convert into one string 
// Array.prototype.pop() // remove the last element 
// Array.prototype.push() // push element in last index
// Array.prototype.reverse() // reverse the array 
// Array.prototype.shift() // remove the ele from frist index
// Array.prototype.unshift() // push the ele in the frist  index
// Array.prototype.sort() // for sorting accending or decending 
// Array.prototype.map() // heigher order method to itrate an array create a new array 
// Array.prototype.filter() // to filter the array and 
// Array.prototype.forEach() // for looping the array 

// propert on array 

let arr = [1, 8, 6, 65, 5, 7, 9]

// arr.length to find the lenght on an array 
// console.log(arr)
// Array.isArray(arr)
// console.log(Array.isArray(arr))

// console.log(arr.at(5))
// let arr1 = [1,5,8,7,[11,42,5],[254,88,7,],47,8]
// console.log(arr1.flat())

// console.log(arr.pop())
// let push_arr = arr.push(10)
// arr.push(10)
// console.log(arr)
// arr.shift()
// console.log(arr)
// arr.unshift(63)
// console.log(arr)
// arr.reverse()
// console.log(arr)
// arr.sort()

// arr.sort(function (a, b) {
//     if (a > b) return 1;
//     if (a < b) return -1;
//     return 0;
// });
// console.log(arr)

// let arr2 = [4,8,6,7,1]
// arr2.sort()
// console.log(arr2)

// const arrow_function = (params) => {
//     console.log(params)
// }
// arrow_function(40)
// higher order function 
let arr20 = [1, 8, 6, 65, 5, 7, 9]
arr20.map((ele, ind) => {
    console.log(ele)
})

const characters = [
    {
        name: "Luke Skywalker",
        height: 172,
        mass: 77,
        eye_color: "blue",
        gender: "male",
    },
    {
        name: "Darth Vader",
        height: 202,
        mass: 136,
        eye_color: "yellow",
        gender: "male",
    },
    {
        name: "Leia Organa",
        height: 150,
        mass: 49,
        eye_color: "brown",
        gender: "female",
    },
    {
        name: "Anakin Skywalker",
        height: 188,
        mass: 84,
        eye_color: "blue",
        gender: "male",
    },
];


characters.map(({name,height,mass} , ind)=>{
    document.write(`${ind+1} name of the character is ${name}  height is  ${height} </br>`)
})

let result = characters.filter((characters => characters.gender == "male"))
console.log(result)

characters.forEach((characters)=>{
    console.log(characters.gender == 'female')
})

