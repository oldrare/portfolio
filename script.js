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
