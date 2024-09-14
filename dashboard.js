// Example for initializing charts (using Chart.js)
document.addEventListener("DOMContentLoaded", function () {
    // Spending Overview Chart
    const spendingCtx = document.getElementById('spendingChart').getContext('2d');
    const spendingChart = new Chart(spendingCtx, {
        type: 'doughnut',
        data: {
            labels: ['Food', 'Rent', 'Utilities', 'Entertainment', 'Others'],
            datasets: [{
                data: [30, 40, 20, 5, 5], // Example data
                backgroundColor: ['#2563eb', '#1e3a8a', '#fbbf24', '#f59e0b', '#ef4444'],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                tooltip: {
                    callbacks: {
                        label: function (context) {
                            let label = context.label || '';
                            if (label) {
                                label += ': ';
                            }
                            if (context.raw !== null) {
                                label += `${context.raw}%`;
                            }
                            return label;
                        }
                    }
                }
            }
        }
    });

    // Income vs Expenses Chart
    const incomeExpensesCtx = document.getElementById('incomeExpensesChart').getContext('2d');
    const incomeExpensesChart = new Chart(incomeExpensesCtx, {
        type: 'bar',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June'], // Example labels
            datasets: [
                {
                    label: 'Income',
                    data: [3000, 3200, 3100, 2900, 3400, 3300], // Example data
                    backgroundColor: '#2563eb'
                },
                {
                    label: 'Expenses',
                    data: [1500, 1600, 1400, 1300, 1700, 1550], // Example data
                    backgroundColor: '#ef4444'
                }
            ]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function (value) {
                            return '$' + value;
                        }
                    }
                }
            },
            plugins: {
                legend: {
                    position: 'top',
                }
            }
        }
    });
});
