window.addEventListener('scroll', function() {
    var header = document.getElementById('nav');
    if (window.scrollY > 50) { // Ajuste o valor conforme necessário
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});