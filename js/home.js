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

    const bankName = document.getElementById("bank-name").value;
    const accountNumber = document.getElementById("account-number").value;
    const addNewAmount = parseInt(
      document.getElementById("add-new-amount").value
    );
    const pinNumber = parseInt(document.getElementById("pin-number").value);

    const validPin = 1234;

    const availableBalance = parseInt(
      document.getElementById("available-balance").innerText
    );

    if (accountNumber.length < 11) {
      alert("Please enter a valid account number");
      return;
    }
    if (pinNumber !== validPin) {
      alert("Please enter a valid pin number");
      return;
    }

    const newAddAmount = addNewAmount + availableBalance;

    document.getElementById("available-balance").innerText = newAddAmount;
  });

// cash Out mony feature
document
  .getElementById("btn-withdraw-mony")
  .addEventListener("click", function (even) {
    even.preventDefault();

    const agentNumber = document.getElementById("agent-number").value;
    const withdrawAmount = parseInt(
      document.getElementById("withdraw-amount").value
    );
    const pinNumber = parseInt(document.getElementById("pin-number").value);

    const availableBalance = parseInt(
      document.getElementById("available-balance").innerText
    );

    const validPin = 1234;
    if (agentNumber.length < 11) {
      alert("Please enter a valid agent number");
      return;
    }
    if (pinNumber !== validPin) {
      alert("Please enter a valid pin number");
      return;
    }

    const totalWithdrawAmount = availableBalance - withdrawAmount;
    document.getElementById("available-balance").innerText =
      totalWithdrawAmount;
  });

// add mony and cash out toggling
document.getElementById("add-mony").addEventListener("click", function () {
  document.getElementById("cash-out-container").style.display = "none";
  document.getElementById("add-mony-container").style.display = "block";
});
document.getElementById("cash-out").addEventListener("click", function () {
  document.getElementById("add-mony-container").style.display = "none";
  document.getElementById("cash-out-container").style.display = "block";
});
