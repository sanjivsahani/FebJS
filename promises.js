
// console.log('Promise')

// //  promise has 3 state 
// //  1.resolve 
// //  2.reject
// //  3.pending 

// let my_promise = new Promise((res, rej) => {
//     res("this promise is resolved")
// })

// my_promise.then((response) => {
//     console.log(response)
// }).catch((err) => {
//     console.log(err)
// })


// fetch("https://dog.ceo/api/breeds/image/random")
//     .then((response) => response.json())
//     .then((data) => console.log(data));





// //  create a promise 

// const my_promise1 = new Promise((res,rej)=>{
//     res("this promise is resolved today at evening")
// }) 

// my_promise1.then((result)=>{
//     console.log(result)
// })


// //  the promisees with settomeout 
// //  create a promise that will resolved after 2 sec

// const my_promise2 = new Promise((res,rej)=>{
//     setTimeout(() => {
//         res("this promise is  resolved after 2 second")
//     }, 2000);
// })

// my_promise2.then((result)=>{
//     console.log(result)
// }).catch((err)=>{
//     console.log(err)
// })

// //  create a promise a function that takes the timer 

// function my_promise3 (timer){
//     return new Promise ((res,rej)=>{
//         setTimeout(() => {
//             res(`this promise is resolved after ${timer} ms`)
//         }, timer);
//     })
// }

// my_promise3(5000).then((result)=>{
//     console.log(result)
// }).catch((err)=>{
//     console.log(err)
// })

// //  create a promise if rhe value is 5 then resolved rhe promise other wise reject the promise 
// //  cuntruction

// function my_promise4 (value){
//     return new Promise((res,rej)=>{
//         if(value % 2 === 0 ){
//             res(`Resolved : this value ${value} is divisible by 2`)
//         }
//         else if(value % 3 !== 0  ){
//             rej(`Rejected : this value is not divisible by 2`)
//         }
//         else{
//             rej(`Rejected : this value is not divisible by 2`)
//         }
//     })
// }


// // excution
// my_promise4(11).then((sanjiv)=>{
//     console.log(sanjiv)
// }).catch((err)=>{
//     console.log(err , "this is err")
// })


const my_promise_data = (data) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(data)
        }, 1000);
    })

}

const Extract_data = (data) => {
    let { name, age, add, profession } = data
    return new Promise((res, rej) => {
        res(`the name of the actor is ${name} and  age is ${age}`)
    })
}

let Data = {
    name: "kartik Arayan",
    age: "35",
    add: "mumbai",
    profession: "Actor"
}

my_promise_data(Data).then((result) => {
    Extract_data(result).then((res) => {
        console.log(res)
    })
}).catch((err) => {
    console.log(err)
})

// async await  



let response = async function () {
    try {
        let result = await my_promise_data(Data)
        let Ext_data = await Extract_data(result)
        console.log(Ext_data)
    } catch (error) {
        console.log(err)
    }

}

response()

