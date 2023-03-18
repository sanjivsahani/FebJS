// console.log(window.document.body.style.backgroundColor = "red")
document.getElementById('header').innerHTML = `<h1>this is a header</h1>`

let lis = document.getElementsByClassName('lis')
console.log(Array.from(lis))
Array.from(lis).forEach((ele) => {
    ele.innerHTML = "this is a new list "
    ele.addEventListener('click', (function () {
        ele.style.color = "red"
    }))
})

let arr = [1,5,8,9,6]

for(let i=0 ; i<arr.length;i++){
    // console.log(arr[i])
}

arr.forEach((ele)=>{
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
        name: "lila Wati",
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

let player = characters.filter(characters =>characters.gender === "female")
console.log(player)
let playername =  player[0].name
document.getElementById('player_name').innerHTML  =  `the Female player name is ${playername}`