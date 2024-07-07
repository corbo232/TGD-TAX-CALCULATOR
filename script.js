function calculateTax() {
    let totalAmount = parseFloat(document.getElementById('total-amount').value);
    let taxRate = parseFloat(document.getElementById('tax-rate').value);

    if (isNaN(totalAmount) || isNaN(taxRate) || totalAmount <= 0 || taxRate < 0) {
        alert('Please enter valid numbers for both fields.');
        return;
    }

    let originalAmount = totalAmount / (1 + (taxRate / 100));
    let taxAdded = totalAmount - originalAmount;

    document.getElementById('total-display').innerText = `Total Amount: €${totalAmount.toFixed(2)}`;
    document.getElementById('tax-display').innerText = `Tax Rate: ${taxRate}%`;
    document.getElementById('original-display').innerText = `Original Amount: €${originalAmount.toFixed(2)}`;
    document.getElementById('tax-added-display').innerText = `Tax Added: €${taxAdded.toFixed(2)}`;
}
