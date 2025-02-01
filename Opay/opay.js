var date = new Date()
var dateString = date.toLocaleString('en-US', {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
});
document.getElementById('transferDate').innerHTML = dateString;


document.addEventListener("DOMContentLoaded", function () {
    document.querySelector('input[type="submit"]').addEventListener("click", generate);
});

function generate() {
    // Get input values
    let receipient = document.getElementById('receipientName')?.value;
    let amount = document.getElementById('amount')?.value;
    let receipientAccount = document.getElementById('receipientAccount')?.value;
    let receipientBank = document.getElementById('receipientBank')?.value;

    // Get target elements to update
    let receiverElements = document.getElementById('receiver');
    let receiverElements1 = document.getElementById('receiver1');
    let amountPaid = document.getElementById('amountPaid');
    let receiverAccountElement = document.getElementById('receiver-account');
    let receiverBankElements = document.getElementById('receiver-bank');
    let receiverBankElements1 = document.getElementById('receiver-bank1');
    console.log(amountPaid)



    if (!receipient || !amount || !receipientAccount || !receipientBank) {
        alert("Please fill in all fields.");
        return;
    }


    if (receiverElements) {
        receiverElements.innerHTML = receipient;
        receiverElements1.innerHTML = receipient
    }

    if (amountPaid) {
        amountPaid.innerHTML = "&#x20A6;" + amount;
    }

    if (receiverAccountElement) {
        receiverAccountElement.innerHTML = receipientAccount;
    }

    if (receiverBankElements) {
        receiverBankElements.innerHTML = receipientBank;
        receiverBankElements1.innerHTML = receipientBank
    }


    let transferDate = document.getElementById('transferDate');
    if (transferDate) {
        transferDate.innerHTML = new Date().toLocaleString(); // Update with current date and time
    }


    // Display success message
    let successMessage = document.getElementById("successMessage");
    successMessage.style.display = "block"; // Show the success message

    // Remove the success message after 5 seconds (if needed)
    setTimeout(() => {
        successMessage.style.display = "none";
    }, 5000); // Hide after 5 seconds

}



