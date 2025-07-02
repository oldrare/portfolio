function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}
window.addEventListener('scroll', function() {
    var reveals = document.querySelectorAll('.reveal');
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 100;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add('show');
        }
    }
});

window.onload = function() {
    new Chart(document.getElementById('salesChart').getContext('2d'), {
        type: 'bar',
        data: { labels:['2024','2025'], datasets:[{ data:[9,16], backgroundColor:['rgba(255,255,255,0.4)','rgba(255,255,255,0.8)'] }] },
        options:{ plugins:{legend:{display:false}}, scales:{x:{display:false}, y:{display:false}} }
    });
    new Chart(document.getElementById('roasChart').getContext('2d'), {
        type: 'line',
        data: { labels:['2024','2025'], datasets:[{ data:[192,322], borderColor:'rgba(255,255,255,0.8)', fill:false }] },
        options:{ plugins:{legend:{display:false}}, scales:{x:{display:false}, y:{display:false}} }
    });
    new Chart(document.getElementById('keywordChart').getContext('2d'), {
        type: 'bar',
        data: { labels:['키워드'], datasets:[{ data:[50], backgroundColor:'rgba(255,255,255,0.6)' }] },
        options:{ plugins:{legend:{display:false}}, scales:{x:{display:false}, y:{display:false}} }
    });
};

window.onload = function() {
    const ctx = document.getElementById('salesCompareChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['4월', '5월', '6월'],
            datasets: [
                {
                    label: '2024',
                    data: [9100000, 10100000, 9500000],
                    backgroundColor: 'rgba(54, 162, 235, 0.7)'
                },
                {
                    label: '2025',
                    data: [16100000, 16200000, 15900000],
                    backgroundColor: 'rgba(255, 99, 132, 0.7)'
                }
            ]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: value => value.toLocaleString() + '₩'
                    }
                }
            }
        }
    });
};
