var userEmailInput = document.getElementById("userEmail");
var userPasswordInput = document.getElementById("userPassword");
//button
var logButton = document.getElementById("logButton");
//anchor
var signUp = document.getElementById("signUp");
//massage
var notExist = document.getElementById("notExist");
var wrong = document.getElementById("wrong");

if(JSON.parse(localStorage.getItem("users")) != null){
    usersContainer = JSON.parse(localStorage.getItem("users"));
    console.log(usersContainer)
}
var index = "";
function check(){
    for(var i=0 ; i<usersContainer.length ;i++){
        if(userEmailInput.value == usersContainer[i].userEmail && userPasswordInput.value == usersContainer[i].userPassword){
            homePage();
            notExist.classList.add("d-none")
            index = `${i}`;
        } 
        else{
                notExist.classList.remove("d-none");
        }
    }
    console.log(index);
    localStorage.setItem("index",JSON.stringify(index));
}



logButton.addEventListener("click" , function(){
    check()
    clearInputs()
})

function clearInputs(){
    userEmailInput.value = "" ;
    userPasswordInput.value ="";
}

function signUpPage(){
    window.location.assign("./signUp.html");
}
signUp.addEventListener("click" , function(){
    signUpPage()
})

function homePage(){
    window.location.assign("./home.html");
}