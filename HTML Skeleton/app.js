console.log("Welcome to my coding site!")
console.log("My Github Repo: https://github.com/taywill05/TaylorWilliams-COP3060")

const fname = "Taylor";
const lname = "Williams";
const gpa = 3.95;
const isCS = true;
const stuTermNum = 5;
const classes = ["COP3060","CIS4301","PHY2048","PHY2048L","COT4210"]
const studentInfo = {
    phoneNum: 9541234567,
    stuDOB: "04/01/2005",
    stuHousing: "Towers",
    advisor: 'Whitney White',
    isHonorsStu: true,
}
let email = null;

let nextTerm = term + 1;
let fullTimeStu = (classes.length >= 5)&&(isCS===true);

const checkPassword =()=>{
    const passwordInput = document.getElementByID("pword");
    const message = document.getElementByID("passwordMessage");
    if(passwordInput.value.length <8){
        message.style.color = "red";
        message.style.content = "Password must be at least 8 characters long";
    }else{
        message.style.color = "green";
        message.style.content = "Valid Password!";
    }
}

