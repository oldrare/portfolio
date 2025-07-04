function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

// 스크롤 reveal
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
    // FRONT END & MARKETING watermark 즉시
    const wm = document.querySelector('.hero-watermark');
    if(wm) wm.classList.add('show');

    // 그 다음 글자
    setTimeout(function(){
        document.querySelectorAll('.hero .reveal').forEach(function(el) {
            el.classList.add('show');
        });
    }, 1800);

    // 그 다음 이미지
    setTimeout(function(){
        const heroBg = document.querySelector('.hero-bg-img');
        if(heroBg) heroBg.classList.add('show');
    }, 3000);

    // Chart.js
    const ctx = document.getElementById('salesCompareChart')?.getContext('2d');
    if(ctx) {
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
                maintainAspectRatio: false,
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
    }
});


document.querySelectorAll('.open-modal-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const target = btn.getAttribute('data-target');
        document.querySelector(target).classList.add('show');
        document.body.style.overflow = 'hidden'; // 스크롤 잠금
    });
});
document.querySelectorAll('.close-modal-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        btn.closest('.portfolio-modal').classList.remove('show');
        document.body.style.overflow = ''; // 스크롤 복구
    });
});
