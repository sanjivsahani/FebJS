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
        "preferredFullName": "Tom Hanks",
        "employeeCode": "E3",
        "region": "CA",
        "phoneNumber": "408-2222222",
        "emailAddress": "tomhanks@gmail.com"
    }
]

let texthtml = ''
Employee.map((ele, ind) => {
    console.log(ele)
    let templatehtml = ` <div class="col-sm-3 bg-dark mt-2">
    <div class="card bg-warning">
        <div class="card-body">
            <h3 class="card-title">${ele?.preferredFullName}</h3>
            <h5 class="card-title">${ele?.jobTitleName}</h5>
            <h6 class="card-title"> userId- ${ele?.userId} region- ${ele.region} </h6>
            <h6 class="card-title">${ele?.emailAddress}</h6>
            <p class="card-text">phoneNumber- ${ele.phoneNumber}</p>
            <a href="http://www.google.com" target = '_blank'class="btn btn-info">checkout</a>
        </div>
    </div>
</div>`
    texthtml += templatehtml
})
document.getElementById('root').innerHTML = texthtml