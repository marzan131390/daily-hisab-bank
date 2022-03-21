//Define user interface...
const logButton = document.getElementById("loginBtn");
let loginArea = document.querySelector(".login-area");

//Adding event listener...
logButton.addEventListener("click", function(){
    loginArea.style.display = "none"
})
