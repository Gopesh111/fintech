document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.calc-btn');
    const calculatorContainer = document.getElementById('calculator-container');

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const calcType = this.getAttribute('data-calc');
            const isVisible = calculatorContainer.style.display === 'block';

            // Check if the same calculator is already visible
            if (isVisible && calculatorContainer.classList.contains(`calculator-${calcType}`)) {
                calculatorContainer.style.display = 'none';  // Hide the calculator
                calculatorContainer.className = '';  // Clear all classes
            } else {
                calculatorContainer.style.display = 'block';  // Show the calculator
                calculatorContainer.className = '';  // Clear previous classes

                // Load the appropriate calculator content
                switch (calcType) {
                    case '1':
                        calculatorContainer.innerHTML = `
                            <div class="calculator-content loan-calculator">
                                <h3>Loan Calculator</h3>
                                <form id="loan-calculator">
                                    <label for="loan-amount">Loan Amount:</label>
                                    <input type="number" id="loan-amount" name="loan-amount" required><br><br>
                                    
                                    <label for="interest-rate">Annual Interest Rate (%):</label>
                                    <input type="number" id="interest-rate" name="interest-rate" step="0.01" required><br><br>
                                    
                                    <label for="loan-term">Loan Term (years):</label>
                                    <input type="number" id="loan-term" name="loan-term" required><br><br>
                                    
                                    <button type="button" onclick="calculateLoan()">Calculate</button>
                                    
                                    <div id="loan-result"></div>
                                </form>
                            </div>
                        `;
                        calculatorContainer.classList.add('calculator-1');
                        break;
                    case '2':
                        calculatorContainer.innerHTML = `
                            <div class="calculator-content savings-calculator">
                                <h3>Savings Calculator</h3>
                                <form id="savings-calculator">
                                    <label for="initial-amount">Initial Amount:</label>
                                    <input type="number" id="initial-amount" name="initial-amount" required><br><br>
                                    
                                    <label for="monthly-contribution">Monthly Contribution:</label>
                                    <input type="number" id="monthly-contribution" name="monthly-contribution" required><br><br>
                                    
                                    <label for="interest-rate">Annual Interest Rate (%):</label>
                                    <input type="number" id="savings-interest-rate" name="interest-rate" step="0.01" required><br><br>
                                    
                                    <label for="years">Years:</label>
                                    <input type="number" id="years" name="years" required><br><br>
                                    
                                    <button type="button" onclick="calculateSavings()">Calculate</button>
                                    
                                    <div id="savings-result"></div>
                                </form>
                            </div>
                        `;
                        calculatorContainer.classList.add('calculator-2');
                        break;
                    case '3':
                        calculatorContainer.innerHTML = `
                            <div class="calculator-content investment-calculator">
                                <h3>Investment Calculator</h3>
                                <form id="investment-calculator">
                                    <label for="investment-amount">Initial Investment:</label>
                                    <input type="number" id="investment-amount" name="investment-amount" required><br><br>
                                    
                                    <label for="interest-rate">Annual Interest Rate (%):</label>
                                    <input type="number" id="investment-interest-rate" name="interest-rate" step="0.01" required><br><br>
                                    
                                    <label for="years">Investment Term (years):</label>
                                    <input type="number" id="investment-years" name="years" required><br><br>
                                    
                                    <button type="button" onclick="calculateInvestment()">Calculate</button>
                                    
                                    <div id="investment-result"></div>
                                </form>
                            </div>
                        `;
                        calculatorContainer.classList.add('calculator-3');
                        break;
                    default:
                        calculatorContainer.style.display = 'none';
                }
            }
        });
    });
});

// Loan Calculator Function
function calculateLoan() {
    const loanAmount = document.getElementById('loan-amount').value;
    const interestRate = document.getElementById('interest-rate').value;
    const loanTerm = document.getElementById('loan-term').value;

    const monthlyRate = (interestRate / 100) / 12;
    const numberOfPayments = loanTerm * 12;
    const monthlyPayment = (loanAmount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -numberOfPayments));

    document.getElementById('loan-result').innerHTML = `Monthly Payment: $${monthlyPayment.toFixed(2)}`;
}

// Savings Calculator Function
function calculateSavings() {
    const initialAmount = document.getElementById('initial-amount').value;
    const monthlyContribution = document.getElementById('monthly-contribution').value;
    const interestRate = document.getElementById('savings-interest-rate').value;
    const years = document.getElementById('years').value;

    let futureValue = initialAmount * Math.pow(1 + (interestRate / 100) / 12, years * 12);
    for (let i = 1; i <= years * 12; i++) {
        futureValue += monthlyContribution * Math.pow(1 + (interestRate / 100) / 12, (years * 12) - i);
    }

    document.getElementById('savings-result').innerHTML = `Future Value: $${futureValue.toFixed(2)}`;
}

// Investment Calculator Function
function calculateInvestment() {
    const investmentAmount = document.getElementById('investment-amount').value;
    const interestRate = document.getElementById('investment-interest-rate').value;
    const years = document.getElementById('investment-years').value;

    const futureValue = investmentAmount * Math.pow(1 + (interestRate / 100), years);

    document.getElementById('investment-result').innerHTML = `Future Value: $${futureValue.toFixed(2)}`;
}
