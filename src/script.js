function addTransaction(type) {
  const desc = document.getElementById("desc").value;
  const amount = document.getElementById("amount").value;

  if (desc === "" || amount === "" || isNaN(amount)) return;

  const listId = type === "Inkomst" ? "incomeList" : "expenseList";
  const list = document.getElementById(listId);
  const li = document.createElement("li");
  li.textContent = desc + " - " + amount + " kr (" + type + ")";
  list.appendChild(li);

  const balance = document.getElementById("balance");
  if (type === "Inkomst") {
    balance.textContent = Number(balance.textContent) + Number(amount);
  } else {
    balance.textContent = Number(balance.textContent) - Number(amount);
  }

  document.getElementById("desc").value = "";
  document.getElementById("amount").value = "";
}

document.getElementById("incomeBtn").addEventListener("click", function () {
  addTransaction("Inkomst");
});

document.getElementById("expenseBtn").addEventListener("click", function () {
  addTransaction("Utgift");
});