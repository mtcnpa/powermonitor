// Contoh data untuk grafik
const ctx = document.getElementById('chart').getContext('2d');
const chart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['1 Phase', '3 Phase', 'Ampere', 'kWh', 'kVARh'], // Label sumbu X
        datasets: [{
            label: 'Voltage (V)',
            data: [220, 380, 10, 50, 70], // Data contoh untuk Voltage
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
        }, {
            label: 'Ampere (A)',
            data: [15, 25, 30, 40, 50], // Data contoh untuk Ampere
            borderColor: 'rgb(54, 162, 235)',
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
        }, {
            label: 'kWh',
            data: [10, 20, 30, 40, 50], // Data contoh untuk kWh
            borderColor: 'rgb(75, 192, 192)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
        }, {
            label: 'kVARh',
            data: [5, 15, 25, 35, 45], // Data contoh untuk kVARh
            borderColor: 'rgb(153, 102, 255)',
            backgroundColor: 'rgba(153, 102, 255, 0.2)',
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

