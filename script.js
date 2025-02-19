// script.js
function calculateZakat() {
    // Get user inputs
    const goldPrice = parseFloat(document.getElementById('goldPrice').value) || 0;
    const silverPrice = parseFloat(document.getElementById('silverPrice').value) || 0;
    const gold = parseFloat(document.getElementById('gold').value) || 0;
    const silver = parseFloat(document.getElementById('silver').value) || 0;
    const cash = parseFloat(document.getElementById('cash').value) || 0;
    const investments = parseFloat(document.getElementById('investments').value) || 0;
    const liabilities = parseFloat(document.getElementById('liabilities').value) || 0;

    // Calculate total values
    const totalGoldValue = gold * goldPrice;
    const totalSilverValue = silver * silverPrice;
    const totalWealth = totalGoldValue + totalSilverValue + cash + investments - liabilities;

    // Calculate Zakat (2.5% of total wealth)
    const zakatAmount = totalWealth * 0.025;

    // Display result
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `
        <i class="fas fa-hand-holding-usd"></i> Your Zakat amount is: <strong>${zakatAmount.toFixed(2)}</strong>
    `;
}