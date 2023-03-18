console.log('hello js ')
console.log('hello js ')


// // map is higher order method . 
// // map is method of an array , 


// let arr = [1, 5, 4, 7, 6, 9, 8, 7, 4]

// arr.map((ele, ind) => {
//     console.log(ele)
// })

// const characters = [
//     {
//         name: "Luke Skywalker",
//         height: 172,
//         mass: 77,
//         eye_color: "blue",
//         gender: "male",
//     },
//     {
//         name: "Darth Vader",
//         height: 202,
//         mass: 136,
//         eye_color: "yellow",
//         gender: "male",
//     },
//     {
//         name: "Leia Organa",
//         height: 150,
//         mass: 49,
//         eye_color: "brown",
//         gender: "female",
//     },
//     {
//         name: "Anakin Skywalker",
//         height: 188,
//         mass: 84,
//         eye_color: "blue",
//         gender: "male",
//     },
// ];


// characters.map(({ name, height, mass }, ind) => {
//     document.write(`${ind + 1} name of the character is ${name}  height is  ${height} </br>`)
// })
// let findGender = characters.filter((characters => characters.gender === "male"))
// console.log(findGender)

// let findmass = findGender.filter((findGender => findGender.mass === 77))

// console.log("find mass is hare ", findmass)
// let findName = findmass[0].name
// console.log(findName)


// // let result = characters.filter((characters => characters.gender == "male"))
// // console.log(result)



// const object = { a: 1, b: 2, c: 3 };

// for (const property in object) {
//     console.log(`${property}: ${object[property]}`);
// }

// let fruit = ['apple', 'mango', 'kiviv', 'banana']

// fruit.forEach((ele, ind) => {

// })

// // findTwoSum / 

// let num = [1, 7, 8, 5, 6, 4]
// let value = 9;
// let output = [1, 7]

// const findSum = (arr, value) => {

//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length - 1; j++) {
//             if (arr[i] + arr[j] === value) {
//                 return [arr[i], arr[j]]
//             }
//         }
//     }
// }
// console.log(findSum(num, value))
// findSum(num, value)
// let x = 0;
// let  i ;
// while (x < 3) {
//   x++;
// }

// console.log(x);
// // Expected output: 3

// while (condition){
//     // statement 
// }
// let i = 0;
// while(i<9){
//     i++
// }
// console.log(i)

// while(condtion)
// let a = 10;
// // console.log(a)
// while (a < 0) {
//     a++
//     a--
//     console.log(a)
// }
// // console.log(a)

// for(let i = 10 ; i < 0 ; i--){
//     console.log(i)
// }
// console.log("jelldskflkasdjfkldsjf")
// let a = 20 ; 
// while (20 < 20){
//     a++
// console.log(a)

// }
// console.log(a)


// findSum  



function FindTwoSum(arr, value) {
    for (let i = 0; i < arr.length; i++) {
        // console.log(arr[i])
        for (j = i+1; j < arr.length; j++) {
            // console.log(arr[j])
            if(arr[i]+arr[j] == value){
                return [ i , j ]
            }

        }
    }
}

let arr = [1, 5, 7, 9, 2]
let value = 8;
// let output = [1,7]  
console.log(FindTwoSum(arr, value))


