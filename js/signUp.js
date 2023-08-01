//adding
var userNameInput = document.getElementById("userName");
var userEmailInput = document.getElementById("userEmail");
var userPasswordInput = document.getElementById("userPassword");
//buttons
var signUpButton = document.getElementById("signBtn");
//massages
var requireMassage = document.getElementById("requireMassage");
var successMassage = document.getElementById("successMassage");
var repeatMassage = document.getElementById("repeatMassage");
var wrongName = document.getElementById("wrongName");
var wrongEmail = document.getElementById("wrongEmail");
var wrongPassword = document.getElementById("wrongPassword");
//anchor
var logIn = document.getElementById("logIn");

if (JSON.parse(localStorage.getItem("users")) != null) {
    usersContainer = JSON.parse(localStorage.getItem("users"));
}
var usersContainer = [];

function addUser() {
    if (inputsRequired() == true) {
        if (regexName() && regexEmail() && regexPassword() == true) {
            var user = {
                userName: userNameInput.value,
                userEmail: userEmailInput.value,
                userPassword: userPasswordInput.value
            }
            if (checkEmail() == true) {
            usersContainer.push(user);
            localStorage.setItem("users", JSON.stringify(usersContainer));
            console.log(usersContainer);
            }
        }
    }
}


signUpButton.addEventListener("click", function () {
    addUser()
    clearInputs()
})

function clearInputs() {
    userNameInput.value = "";
    userEmailInput.value = "";
    userPasswordInput.value = "";
}

function logInPage() {
    window.location.assign("./index.html")
}
logIn.addEventListener("click", function () {
    logInPage()
})
function inputsRequired() {
    var text1 = userNameInput.value;
    var text2 = userEmailInput.value;
    var text3 = userPasswordInput.value;
    if (text1 && text2 && text3 != null) {
        successMassage.classList.remove("d-none");
        requireMassage.classList.add("d-none");
        return true;
    }
    else {
        requireMassage.classList.remove("d-none")
        successMassage.classList.add("d-none");
        return false;
    }
}
function regexName() {
    var regexName = /^[A-Za-z\s?0-9]{5,12}$/
    var text = userNameInput.value;
    if (regexName.test(text) == true) {
        wrongName.classList.add("d-none");
        return true;
    }
    else {
        wrongName.classList.remove("d-none");
        successMassage.classList.add("d-none");
        return false;
    }
}
function regexEmail() {
    var regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    // var regexEmail = /^[A-za-z]{2,8}[0-9]{1,4}[@][a-z]{2,5}[\.][a-z]{2,5}$/;
    var text = userEmailInput.value;
    if (regexEmail.test(text) == true) {
        wrongEmail.classList.add("d-none");
        return true;
    }
    else {
        wrongEmail.classList.remove("d-none");
        successMassage.classList.add("d-none");
        return false;
    }
}

function regexPassword() {
    var regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    var text = userPasswordInput.value;
    if (regexPassword.test(text) == true) {
        wrongPassword.classList.add("d-none");
        return true;
    }
    else {
        wrongPassword.classList.remove("d-none");
        successMassage.classList.add("d-none");
        return false;
    }
}
function checkEmail() {
    var text = userEmailInput.value;
    if (JSON.parse(localStorage.getItem("users")) != null) {
        usersContainer = JSON.parse(localStorage.getItem("users"));
    }
    console.log(usersContainer);
    if (usersContainer.length != 0) {
        for (var i = 0; i < usersContainer.length; i++) {
            if (text != usersContainer[i].userEmail) {
                repeatMassage.classList.add("d-none");
                return true;
            }
            else {
                repeatMassage.classList.remove("d-none");
                successMassage.classList.add("d-none");
                return false;
            }
        }
    }
    else {
        return true;
    }
}
console.log(checkEmail());