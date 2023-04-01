let num = ''
let button_value = document.getElementsByClassName('btn')
let button_nums = Array.from(button_value)
let input_value = document.getElementById('calculation').value
// console.log(button_nums)
button_nums.forEach((ele) => {
    let target_button = ele
    target_button.addEventListener('click', (e) => {
        if (e.target.innerText === 'C') {
            document.getElementById('calculation').value = ''
            location.reload();
            console.log("this is number" , num)

        }
       else if (e.target.innerText === '=') {
            console.log(eval(num))
            document.getElementById('calculation').value = eval(num)
            console.log(num)
        }
        else {
            num += e.target.innerText
            document.getElementById('calculation').value = num
            console.log(num)
        }
    })
})