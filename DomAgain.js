console.log('hello js ')
// document.write("hello js  !!!!!!")
console.log(document.body.style.backgroundColor = "yellow")

document.getElementById('header').innerHTML = `<h3>this is a header</h3>`
let header = document.getElementById('header')
header.addEventListener('dblclick',()=>{
    header.style.color = "red"
})
document.getElementById('p_tag').innerText = "this is using js "

document.getElementById('container').innerHTML = ` <div>
<h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus veritatis ratione commodi nostrum sint, nam optio unde quasi voluptate similique totam numquam! Autem labore eos alias, aut voluptate similique in.</h3>
</div>`

let list = document.getElementsByClassName('lis')
console.log(list)

let listArray = Array.from(list)
console.log(listArray)

listArray.forEach((ele) => {
    ele.innerHTML = "this is a new list "
     ele.addEventListener('click',()=>{
        ele.style.fontSize = '50px'
        ele.style.color = 'green'
     })
})

// listArray.forEach((ele, ind) => {
//     ele.innerHTML = "this is a list "
// })

console.log('6+9')