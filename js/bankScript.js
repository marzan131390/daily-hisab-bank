//Define user interface...
const logButton = document.getElementById("loginBtn");
let loginArea = document.querySelector(".login-area");
let transactionArea = document.getElementById("transaction-area");
const depositButton = document.getElementById("deposit-btn");
const withdrawButton = document.querySelector("#withdraw-btn");
let currentDeposit = document.querySelector("#current-deposit");
let currentWithdraw = document.querySelector("#current-withdraw");
let currentBalance = document.querySelector("#current-balance");
const depositInput = document.getElementById("deposit-amount");
const withdrawInput = document.getElementById("withdraw-amount");

//Login Button Event Handler
logButton.addEventListener("click", function(){
    loginArea.style.display = "none";
    transactionArea.style.display = "block";
});

//Deposit Button Event Handler....
depositButton.addEventListener("click", function() {
    // let depositMoney = parseFloat(depositInput.value);
    
    // getInputNumber(depositInput)
    // let currentDeposit = parseFloat(depositCar.innerText);
    // let totalDeposit = currentDeposit + depositMoney;
    // depositCar.innerText = totalDeposit;

    let depositMoney = getInputNumber(depositInput);
    //Updating Deposit Value...
    updateSpanText(currentDeposit, depositMoney);
   
    //Subtraction from Current Balance Amount
    updateSpanText(currentBalance, depositMoney);
    depositInput.value = "";
});

//Creating A Function to Get Input Number..
function getInputNumber(id) {
    let inputValue = parseFloat(id.value);
    return inputValue;
    
}

//Withdraw Button Event Handler...
withdrawButton.addEventListener("click", function() {
    // const withdrawAmount = parseFloat(withdrawInput.value);
    
    let withdrawAmount = getInputNumber(withdrawInput);
    // const currentWithMoney = parseFloat(currentWithdraw.innerText);
    // let totalAmount = currentWithMoney + withdrawAmount;
    // currentWithdraw.innerText = totalAmount;
    updateSpanText(currentWithdraw, withdrawAmount);
    updateSpanText(currentBalance, -1*withdrawAmount)
    withdrawInput.value = "";
})

function updateSpanText(id, insertMoney) {
    let currentValue = parseFloat(id.innerText);
    let totalAmount = currentValue + insertMoney;
    id.innerText = totalAmount;
}
