//Define user interface...
const logButton = document.getElementById("loginBtn");
let loginArea = document.querySelector(".login-area");
let transactionArea = document.getElementById("transaction-area");
const depositButton = document.getElementById("deposit-btn");
const withdrawButton = document.querySelector("#withdraw-btn");
let depositCar = document.querySelector("#current-deposit");
let withdrawCar = document.querySelector("#current-withdraw");
let balanceCar = document.querySelector("#current-balance");
const depositInput = document.getElementById("deposit-amount");
const withdrawInput = document.getElementById("withdraw-amount");

//Login Button Event Handler
logButton.addEventListener("click", function(){
    loginArea.style.display = "none";
    transactionArea.style.display = "block";
});

//Deposit Button Event Handler....
depositButton.addEventListener("click", function() {
    let depositMoney = parseFloat(depositInput.value);
    let currentDeposit = parseFloat(depositCar.innerText);
    let totalDeposit = currentDeposit + depositMoney;
    depositCar.innerText = totalDeposit;
    depositInput.value = "";
    //Subtraction from Current Balance Amount
    let currentBalance = parseFloat(balanceCar.innerText);
    let totalBalance = currentBalance - depositMoney;
    balanceCar.innerText = totalBalance;

})
