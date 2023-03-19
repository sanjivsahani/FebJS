console.log("hello js ")

function sum(arr, value) {
    for (let i = 0; i < arr.length; i++) {
        console.log(i)
        for (let j = i + 1; j < arr.length; j++) {
            console.log(j)
            if (arr[i] + arr[j] == value) {
                let arr2 = [[i], [j]];
                return arr2;
            }
        }
    }
    return -1
}
let arr = [1, 21, 3, 14, 5, 60, 6, 7];
let value = 81;
let output = [21, 60]

// console.log(sum(arr, value))

//  array = [1,4,8,9,8,7]

let array = [1, 4, 8, 9, 8, 7]

array.at(3)
// console.log(array.at(3))
// console.log(array.pop())
// console.log(array)
// array.push(111,222,333)
// console.log(array)
let fruit = ['a', 'p', 'p', 'l', 'e']
fruit.reverse()
// console.log(fruit)

// fruit.sort()
// // console.log(fruit)

// num.sort()
// // console.log(num)

// // function  
// let num = [5, 8, 6, 7, 3, 81, 96, 36, 70]
// function = 1 . normal Function , arrow function , call back function , anonmus function 
// normal Function
function Func(a, b) {  // acceot the params 12
    //  loop for loop 
    let sum = 0
    for (let i = 0; i < a.length; i++) {
        sum += a[i]
    }
    return sum
}
console.log(Func([5, 8, 6, 7, 3, 81, 96, 36, 70]))

Func([5, 8, 6, 7, 3, 81, 96, 36, 70], 50) // pass the agrs 

// const sum = () =>{

// }
// sum()


function frist(second) {
    console.log("this is frist Function")
    second()
}
frist(() => {
    console.log('first', "this is anonymos")
})

function second() {
    console.log("this is the second function ");
}

const arr1 = [5, 8, 6, 7, 3, 81, 96, 36, 70]

// for each 

arr1.forEach((ele, ind) => {
    console.log(ele, ind)
})

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

// const result = words.filter(word => word.length > 9);






console.log((5 > 6) ? "big" : "small")

// let str = ''let index = 5; for (let i = 1; i <= index; i++) { for (let j = 1; j <= i; j++) { str += j; } str += '\n'; } console.log(str); for (let i = 5; i >= index; i--) { for (let j = 1; j <= i; j++) { str += j; } str += '\n'; } console.log(str);

let index = 5;
let string = "";
for (let i = 1; i <= index; i++) {
    for (let j = 0; j < i; j++) {
        string += "*";
        string += ' '
    }
    string += "\n";
}
// console.log(string);
for (let i = 1; i <= index - 1; i++) {
    for (let j = 0; j < index - i; j++) {
        string += "*";
        string += ' '
    }
    string += "\n";
}
console.log(string);

let n = 5;
let str = ''
for (let i = 0; i <= 5; i++) {
    for (let k = 1; k <= i; k++) {
        str += "*"
    }
    str += '\n'
}
for (let i = 4; i >= 1; i--) {
    for (let k = 1; k <= i; k++) {
        str += "*"
    }
    str += '\n'
}
console.log(str)

