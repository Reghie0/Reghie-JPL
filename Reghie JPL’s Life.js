document.querySelectorAll('.accordion h2').forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        if (content.style.display === 'block') {
            content.style.display = 'none';
        } else {
            document.querySelectorAll('.accordion .content').forEach(c => c.style.display = 'none');
            content.style.display = 'block';
        }
    });
});

document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        const navHeight = document.querySelector('nav').offsetHeight;
        window.scrollTo({
            top: targetElement.offsetTop - navHeight,
            behavior: 'smooth'
        });
    });
});

window.addEventListener('scroll', () => {
    document.querySelectorAll('.accordion .content').forEach(content => {
        if (content.style.display === 'block') {
            const rect = content.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                content.style.opacity = '1';
            }
        }
    });
});