// 다크 모드 toggle
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

// scroll reveal
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