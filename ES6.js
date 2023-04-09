console.log('hello es 6')

//  spred oprator  ...

const arr = ['apple', 'kivi', 'banana', 'mango']

console.log(...arr)

for (const elemetn of arr) {
    // console.log(elemetn)
}

arr.map((ele, ind) => {
    console.log(ele, ind)
})
let Employee = [
    {
        "userId": "rirani",
        "jobTitleName": "Developer",
        "firstName": "Romin",
        "lastName": "Irani",
        "preferredFullName": "Romin Irani",
        "employeeCode": "E1",
        "region": "CA",
        "phoneNumber": "408-1234567",
        "emailAddress": "romin.k.irani@gmail.com"
    },
    {
        "userId": "nirani",
        "jobTitleName": "Developer",
        "firstName": "Neil",
        "lastName": "Irani",
        "preferredFullName": "Neil Irani",
        "employeeCode": "E2",
        "region": "CA",
        "phoneNumber": "408-1111111",
        "emailAddress": "neilrirani@gmail.com"
    },
    {
        "userId": "thanks",
        "jobTitleName": "Program Directory",
        "firstName": "Tom",
        "lastName": "Hanks",
        "preferredFullName": "Tom Hanks",
        "employeeCode": "E3",
        "region": "CA",
        "phoneNumber": "408-2222222",
        "emailAddress": "tomhanks@gmail.com"
    },
    {
        "userId": "nirani",
        "jobTitleName": "Developer",
        "firstName": "Neil",
        "lastName": "Irani",
        "preferredFullName": "Neil Irani",
        "employeeCode": "E2",
        "region": "CA",
        "phoneNumber": "408-1111111",
        "emailAddress": "neilrirani@gmail.com"
    },
    {
        "userId": "thanks",
        "jobTitleName": "Program Directory",
        "firstName": "Tom",
        "lastName": "Hanks",
        "preferredFullName": "Tom Hanks",
        "employeeCode": "E3",
        "region": "CA",
        "phoneNumber": "408-2222222",
        "emailAddress": "tomhanks@gmail.com"
    },
    {
        "userId": "nirani",
        "jobTitleName": "Developer",
        "firstName": "Neil",
        "lastName": "Irani",
        "preferredFullName": "Neil Irani",
        "employeeCode": "E2",
        "region": "CA",
        "phoneNumber": "408-1111111",
        "emailAddress": "neilrirani@gmail.com"
    },
    {
        "userId": "thanks",
        "jobTitleName": "Program Directory",
        "firstName": "Tom",
        "lastName": "Hanks",
        "preferredFullName": "Tom Hanks",
        "employeeCode": "E3",
        "region": "CA",
        "phoneNumber": "408-2222222",
        "emailAddress": "tomhanks@gmail.com"
    },
    {
        "userId": "nirani",
        "jobTitleName": "Developer",
        "firstName": "Neil",
        "lastName": "Irani",
        "preferredFullName": "Neil Irani",
        "employeeCode": "E2",
        "region": "CA",
        "phoneNumber": "408-1111111",
        "emailAddress": "neilrirani@gmail.com"
    },
    {
        "userId": "thanks",
        "jobTitleName": "Program Directory",
        "firstName": "Tom",
        "lastName": "Hanks",
        "preferredFullName": "sanjiv sahani",
        "employeeCode": "E3",
        "region": "CA",
        "phoneNumber": "408-2222222",
        "emailAddress": "tomhanks@gmail.com"
    }
]
let str = 'kkkkkkkk'
Employee.map((ele, ind) => {
    console.log(ele.userId)
    let templatehtml = ` 
        <h3>${ele.preferredFullName}</h3>
        <h3> user ID ${ele.userId}</h3>`
    // str+= templatehtml
})

document.getElementById('getName').innerHTML = str
//  template String 

let name1 = "kartik";
let age = 24;
console.log("hello " + name1 + ' your age is ' + age)

let templateStr = `hello this is 
my name ${name1} my 
age is ${age}`
document.write(templateStr)
console.log(templateStr)

let poem = `Twinkle, twinkle, little star,
        How I wonder what you are!
Up above the world so high,
        Like a diamond in the sky.

When the blazing sun is gone,
        When he nothing shines upon,
Then you show your little light,
        Twinkle, twinkle, all the night.

Then the traveler in the dark
        Thanks you for your tiny spark,
How could he see where to go,
        If you did not twinkle so?

In the dark blue sky you keep,
        Often through my curtains peep
For you never shut your eye,
        Till the sun is in the sky.

As your bright and tiny spark
        Lights the traveler in the dark,
Though I know not what you are,
        Twinkle, twinkle, little star.`

console.log(poem)

function foo(...num) {
    console.log(num)
 
}
foo(1, 5, 7, 8, 9, 5, 4, 7, 6, 2, 1, 4 , 545,545,5454,5454,5454,5454,5454,5454,)

let str3 = "hello world my name is java Script"
console.log(str3.startsWith('h'))
console.log(str3.endsWith('d'))
console.log(str3.includes('Script'))

// String.includes()
// String.startsWith()
// String.endsWith()

let number = 123456
console.log(number)
let numberString = number.toString()
console.log (numberString , 'numberString')
let chngeItoNumber = Number(numberString)
console.log(chngeItoNumber , "chngeItoNumber")

let DecimalNumber = 11.75602154564654654
console.log(DecimalNumber.toFixed(4))
console.log(Math.round(DecimalNumber))

console.log(Math)
 
// Date.prototype.getDate()
// Date.prototype.getDay()
// Date.prototype.getFullYear()
// Date.prototype.getHours()
// Date.prototype.getMilliseconds()
// Date.prototype.getMinutes()
// Date.prototype.getMonth()
// Date.prototype.getSeconds()
// Date.prototype.getTime()
// Date.prototype.getTimezoneOffset()
// Date.prototype.getUTCDate()
// Date.prototype.getUTCDay()
// Date.prototype.getUTCFullYear()
// Date.prototype.getUTCHours()
// Date.prototype.getUTCMilliseconds()
// Date.prototype.getUTCMinutes()
// Date.prototype.getUTCMonth()
// Date.prototype.getUTCSeconds()
// Date.prototype.getYear()
let today = new Date()
 console.log(today.getHours())
 console.log(today.getDay())
 console.log(today.getFullYear())
 console.log(today.getMonth())
 console.log(today.getUTCDate())


 let nestedArr = [1,5,7,[1,4,7,],14,2,5,[1,5,4,7]]
 console.log(nestedArr)
 let faltarr = nestedArr.flat()
 console.log(faltarr)


 console.log("hello es6")

