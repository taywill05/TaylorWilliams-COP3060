console.log("Welcome to my coding site!")
console.log("My Github Repo: https://github.com/taywill05/TaylorWilliams-COP3060")

const firstName = "Taylor";
const lastName = "Williams";
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

let nextTerm = stuTermNum + 1;
let fullTimeStu = (classes.length >= 5)&&(isCS===true);

const classList = document.getElementById("classList");

for(let i of classes){
    const li = document.createElement("li");
    li.textContent =i;
    classList.appendChild(li)
}

const checkLength = () =>{
    const passwordInput = document.getElementById("pword");
    const message = document.getElementById("passwordMessage");
    if(passwordInput.value.length < 8){
        message.style.color = "red";
        message.textContent = "Password must be at least 8 characters long";
    }
    else{
        message.style.color = "green";
        message.textContent = "Valid Password";
    }
}
function checkInputs(){
    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const email = document.getElementById("email").value;
    const pword = document.getElementById("pword").value;
    const message = document.getElementById("check");

    if(!fname || !lname || !email || !pword){
        message.textContent = "Please fill out all fields";
        message.style.color = "red"
    }else{
        message.style.color = "green";
        message.textContent = "Valid Input. You may submit.";
    }
}

document.getElementById("fname").addEventListener("input",() =>{
    const fname = document.getElementById("fname").value;
    const fnameMsg = document.getElementById("site")
    if(fname){
        fnameMsg.textContent = "Welcome " + fname + "!";
        fnameMsg.style.color = "blue";
    }
});


