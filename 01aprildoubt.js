console.log("hello DOM")
document.getElementById('id_1').innerHTML = `<h1>Hello js DOM Method</h1>`

document.getElementById('id_1').addEventListener('mouseover', () => {
    document.getElementById('id_1').style.color = "red"
})


document.getElementById('id_1').addEventListener('click', () => {
    document.getElementById('id_1').style.color = "black"
})

let cls = document.getElementsByClassName('cls_1')
console.log(cls)

cls[0].addEventListener('mouseover', () => {
    cls[0].style.color = "green"
})
cls[0].addEventListener('mouseout', () => {
    cls[0].style.color = "blue"
})

let ps = document.querySelectorAll('p')
console.log(ps[3])

ps[3].innerText = "this is a p tag"

ps[3].addEventListener('click', () => {  //  signle click 
    ps[3].style.fontSize = "50px"
})

ps[3].addEventListener('dblclick', () => {
    ps[3].style.fontSize = "30px"   // duble click 
})



let arr = ['apple','kive','banana','mango','pineapple']

arr.map((ele, ind)=>{
    console.log(ele)
})

let emplyee = [
    {
    name:"kartik",
    age:"25",
    position:"manager"
},
{
    name:"kunal",
    age:"26",
    position:"FS dev"
},
{
    name:"subhan",
    age:"23",
    position:"FE dev"
},
{
    name:"kiran",
    age:"23",
    position:"BC dev"
}

]
// console.log(emplyee[0].name)
// console.log(emplyee[1].name)
// console.log(emplyee[2].name)
// console.log(emplyee[3].name)

emplyee.map((ele, ind)=>{
    console.log(ele.name)
})

let findname = emplyee.filter(emplyee =>emplyee.age === "23")
console.log(findname)

findname.map((ele,ind)=>{
    console.log(`the age is 23 and name is ${ele.name}`)
})