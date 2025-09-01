const transactionHistory = [];
// functions to get input values
function getInputValueNumber(id) {
  const inputField = document.getElementById(id);
  const inputFieldValue = inputField.value;  
  const inputFieldValueNumber = parseInt(inputFieldValue);

  return inputFieldValueNumber;
}


function getInputValue(id) {
  const inputField = document.getElementById(id);
  const inputFieldValue = inputField.value;

  return inputFieldValue;
}

// function to get inner text
function getInnerText(id) {
  const element = document.getElementById(id);
  const elementValue = element.innerText;
  const elementValueNumber = parseInt(elementValue);

  return elementValueNumber;
  
}

// function to set inner text
function setInnerText(value) {
  const availableBalanceElement = document.getElementById('available-balance');
  availableBalanceElement.innerText = value;
}

// function handle toggle
function handleToggle(id) {
  const forms = document.getElementsByClassName('form');

  for (const form of forms) {
    form.style.display = 'none';
  }
  document.getElementById(id).style.display = 'block'
}

// function handle button toggle
function handleToggleButton(id) {
  const formBtns = document.getElementsByClassName('form-btn');

  for (const btn of formBtns) {
    btn.classList.remove("btn-background-color", "btn-border-blue") 
  }

  document.getElementById(id).classList.remove("border-gray-400")
  document.getElementById(id).classList.add("btn-background-color", "btn-border-blue")
}

// add mony
const validPin = 1234;

document
  .getElementById("btn-add-mony")
  .addEventListener("click", function (even) {
    even.preventDefault();
    // const bankName = document.getElementById('bank-name').value
    // const accountNumber = document.getElementById('account-number').value
    // const addNewAmount = parseInt(document.getElementById('add-new-amount').value)
    // const pinNumber = document.getElementById('pin-number').value
    // const availableBalance = parseInt(document.getElementById('available-balance').innerText)
    // const newAmount = availableBalance + addNewAmount;
    // document.getElementById('available-balance').innerText = newAmount

    const bankName = getInputValue('bank-name')
    const addNewAmount = parseInt(
      document.getElementById("add-new-amount").value
    );
    if (addNewAmount <= 0) {
      alert("Invalid Amount");
      return;
    }

    const accountNumber = getInputValueNumber("account-number");
    const pinNumber = getInputValueNumber("pin-number");

    const availableBalance = getInnerText('available-balance')

    if (accountNumber.toString().length < 11) {
      alert("Please enter a valid account number");
      return;
    }
    if (pinNumber !== validPin) {
      alert("Please enter a valid pin number");
      return;
    }

    const newAddAmount = addNewAmount + availableBalance;

    setInnerText(newAddAmount);

    const data = {
      name: "Add Mony",
      date: new Date().toLocaleTimeString(),
    }
    transactionHistory.push(data);
    console.log(transactionHistory);
    
  });

// cash Out mony feature
document
  .getElementById("btn-withdraw-mony")
  .addEventListener("click", function (even) {
    even.preventDefault();

    const agentNumber = getInputValueNumber('agent-number')
    const withdrawAmount = parseInt(
      document.getElementById("withdraw-amount").value
    );
    const pinNumber = getInputValueNumber('pin-number-value')
     
    const availableBalance = getInnerText('available-balance')
    if (withdrawAmount <= 0 || withdrawAmount > availableBalance) {
      alert("Invalid amount");
      return;
    }

    const validPinNumber = 1234;
    if (agentNumber.toString().length < 11) {
      alert("Please enter a valid agent number");
      return;
    }
    if (pinNumber != validPinNumber) {
      alert("Please enter a valid pin number");
      return;
    }

    const totalWithdrawAmount = availableBalance - withdrawAmount;
    setInnerText(totalWithdrawAmount);

     const data = {
      name: "Cash Out",
      date: new Date().toLocaleTimeString(),
    }
    transactionHistory.push(data);
    console.log(transactionHistory);
  });











// transaction History
document.getElementById("transaction")
  .addEventListener('click', function () {
    const transactionContainerHistory = document.getElementById('transaction-container-history-box');
    transactionContainerHistory.innerText = "";

    for (const data of transactionHistory) {
      const divElement = document.createElement('div');
      divElement.innerHTML = `
      <div class="flex justify-between items-center bg-white rounded-xl p-4 my-4">
          <div class="flex justify-between items-center">
            <img src="./assets/wallet1.png" alt="" class="bg-gray-200 p-3 rounded-full">
            <div class="ml-4 ">
              <h2 class="font-bold text-xl">${data.name}</h2>
              <p class="font-medium text-gray-400 text-sm pt-1">${data.date}</p>
            </div>
          </div>

          <div>
            <i class="fa-solid fa-ellipsis-vertical"></i>
          </div>
        </div>
      `
       transactionContainerHistory.appendChild(divElement)
    }
  
})
// add mony and cash out toggling
// add mony 
document.getElementById("add-mony").addEventListener("click", function () {
  handleToggle('add-mony-container')
  
  handleToggleButton("add-mony")
});
// cash out
document.getElementById("cash-out").addEventListener("click", function () {
  handleToggle('cash-out-container')

  handleToggleButton("cash-out")
});
// Transfer Mony
document.getElementById("transfer-mony").addEventListener("click", function () {
  handleToggle('transfer-mony-container')

  handleToggleButton("transfer-mony")
});
// get bonus
document.getElementById("get-bonus").addEventListener("click", function () {
  handleToggle('get-bonus-container')

  handleToggleButton("get-bonus")
});
// pay bill
document.getElementById("pay-bill").addEventListener("click", function () {
  handleToggle('pay-bill-container')

  handleToggleButton("pay-bill")
});
// transaction
document.getElementById("transaction").addEventListener("click", function () {
  handleToggle('transaction-container')

  handleToggleButton("transaction")
});
