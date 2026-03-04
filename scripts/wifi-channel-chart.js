const ctx = document.getElementById('wifiCanvas').getContext('2d');

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['1','2','3','4','5','6','7','8','9','10','11','12','13'],
        datasets: [{
            label: '2.4GHz WiFi Channels',
            data: [20,15,25,10,30,40,35,25,15,10,5,0,0],
            backgroundColor: 'rgba(11,15,138,0.7)'
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: { beginAtZero: true }
        }
    }
});