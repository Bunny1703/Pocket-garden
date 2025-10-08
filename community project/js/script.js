// Login Form Validation
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
            // Simple validation
            if (email && password) {
                // In a real application, you would send this data to a server
                // For demo purposes, we'll just redirect to the homepage
                window.location.href = 'home.html';
            } else {
                alert('Please fill in all fields');
            }
        });
    }

    // Plant Growth Chart (if on the homepage)
    const growthChart = document.getElementById('growthChart');
    if (growthChart) {
        const ctx = growthChart.getContext('2d');
        
        // Sample data for plant growth
        const data = {
            labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
            datasets: [
                {
                    label: 'Tomato Growth (cm)',
                    data: [2, 5, 10, 15, 20, 25],
                    borderColor: '#E53935',
                    backgroundColor: 'rgba(229, 57, 53, 0.1)',
                    tension: 0.4
                },
                {
                    label: 'Mint Growth (cm)',
                    data: [1, 3, 7, 12, 18, 22],
                    borderColor: '#4CAF50',
                    backgroundColor: 'rgba(76, 175, 80, 0.1)',
                    tension: 0.4
                },
                {
                    label: 'Curry Leaves Growth (cm)',
                    data: [0.5, 2, 5, 9, 14, 18],
                    borderColor: '#FFC107',
                    backgroundColor: 'rgba(255, 193, 7, 0.1)',
                    tension: 0.4
                }
            ]
        };
        
        // Create chart
        new Chart(ctx, {
            type: 'line',
            data: data,
            options: {
                responsive: true,
                plugins: {
                    title: {
                        display: true,
                        text: 'Plant Growth Progress'
                    },
                    tooltip: {
                        mode: 'index',
                        intersect: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Height (cm)'
                        }
                    }
                }
            }
        });
    }
});