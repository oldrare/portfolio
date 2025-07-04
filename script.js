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
window.addEventListener('DOMContentLoaded', function() {
    // FRONT END & MARKETING 먼저
    setTimeout(function(){
const wm = document.querySelector('.hero-watermark');
if(wm) wm.classList.add('show');

// 나머지는 지연
setTimeout(function(){
    document.querySelectorAll('.hero .reveal').forEach(function(el) {
        el.classList.add('show');
    });
}, 1800);

setTimeout(function(){
    const heroBg = document.querySelector('.hero-bg-img');
    if(heroBg) heroBg.classList.add('show');
}, 3000);
});

window.addEventListener('DOMContentLoaded', function() {
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
            maintainAspectRatio: false, // 이거 추가!
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
});

window.addEventListener('DOMContentLoaded', function() {
    // 글자는 즉시 올라오도록
    setTimeout(function(){
        document.querySelectorAll('.hero .reveal').forEach(function(el) {
            el.classList.add('show');
        });
    }, 200);

    // 이미지는 글자 올라온 뒤 2초 뒤 등장
    setTimeout(function(){
        const heroBg = document.querySelector('.hero-bg-img');
        if(heroBg) heroBg.classList.add('show');
    }, 1200); // 2000ms + 약간
});

