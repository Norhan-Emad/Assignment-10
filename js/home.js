var logOut = document.getElementById("logOut");

function goBack(){
    window.location.assign("./index.html");
}

logOut.addEventListener("click" , function(){
    goBack()
})

if(JSON.parse(localStorage.getItem("users")) != null){
    usersContainer = JSON.parse(localStorage.getItem("users"));
    console.log(usersContainer)
}
var index =JSON.parse(localStorage.getItem("index")) ;
console.log(index);

document.getElementById("user").innerHTML = usersContainer[index].userName;

