let str = "sanjiv"
let sort_str = str.split("")
console.log(sort_str.sort())

// grab the header_id and put the keyword as "tata Group"
document.getElementById('header_id').innerText = "Tata Group"
// grab the header_id and put the keyword as  change the  tag <h2>"tata Group"</h2>
document.getElementById('header_id').innerHTML = `<h2>Tata Group</h2>`

// grab the header_id and    change the  color as red 
document.getElementById('header_id').style.color = 'red'

//  grab the header_id and  put a event listner on it 

let header = document.getElementById('header_id')
header.addEventListener('click', () => {
    header.style.fontSize = "100px"
})
//  grab the header_id and  put a event listner on it 

header.addEventListener('mouseover', () => {
    header.style.color = "green"
})
header.addEventListener('mouseout', () => {
    header.style.color = "red"
})

let paragraph = document.getElementsByClassName('para')

console.log(paragraph[0])

let users = [

    { firstName: "akshay", lastName: "saini", age: 26 },
    { firstName: "mukesh", lastName: "kumar", age: 50 },
    { firstName: "vicky", lastName: "sharma", age: 50 },
    { firstName: "vihal", lastName: "tiwari", age: 25 },

];
let str_para = ''
users.map((ele, ind) => {
    str_para += `<h1>${ele.firstName} ${ele.age}</h1>`
    return str_para
})

document.getElementById('root').innerHTML = str_para

let arr = [50, 25 , 26]

let result = users.filter(users => users.age === 26)
console.log(result)
console.log(result.length)

let nameStr = ''
result.map((ele, ind) => {
    nameStr += `<h1> my name is ${ele.firstName} ${ele.lastName} and my  age is 50 </h1>`
    return nameStr
})

document.getElementById('age_filter').innerHTML = nameStr
// let playername =  player[0].name
// document.getElementById('player_name').innerHTML  =  `the Female player name is ${playername}`