// console.log("this is 1 line ")
// console.log("this is 2 line ")
// console.log("this is 3 line ")
// console.log("this is 4 line ")
// console.log("this is 5 line ")
// console.log("this is 6 line ")
// console.log("this is 7 line ")

// setTimeout(() => {
//     console.log("this is our frist task")
//     for(let i=1 ;i<15;i++){
//         console.log (i)
//     }  
// }, 1);

// console.log("this is our second task ")
// for(let i=10 ;i<2500;i++){
//     console.log (i)
// }



// setTimeout

// setTimeout(() => {
//     console.log("it is set time out ")
// }, 5000)
// console.log("it is outer task ")
// console.log("it is 1 task ")
// console.log("it is 2 task ")
// console.log("it is 3 task ")

//  settimeinterval 
//  setInterval(() => {
//     console.log("it is set time  interval  ")
//  }, 2000);
//  console.log("it is 1 task ")
//  console.log("it is 2 task ")

//  callbacks 






function doStep1(init, callback) {
    const result = init + 1;
    // console.log(result, "this is dostep 1")
    callback(result);
}

function doStep2(init, callback) {
    const result = init + 10;
    callback(result);
    // console.log(result, "do step 2")
}

function doStep3(init, callback) {
    const result = init + 3;
    callback(result);
    // console.log(result, "do step3")
}




// function doOperation() {
//     doStep1(1, (result1) => {
//         doStep2(result1, (result2) => {
//             doStep3(result2, (result3) => {
//                 console.log(`result: ${result3}`);
//             });
//         });
//     });
// }

function doOperation() {
    doStep1(1, (task1) => {
        doStep2(task1, (task2) => {
            doStep3(task2,(task3) => {
                console.log("result:-" ,task3) 
            })
        })
    })
}

doOperation();

function tenth() { }

function ninth() { tenth() }

function eigth() { ninth() }

function seventh() { eigth() }

function sixth() { seventh() }

function fifth() { sixth() }

function fourth() { fifth() }

function third() { fourth() }

function second() { third() }

function first() { second() }

first();



 