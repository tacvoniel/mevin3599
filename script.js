const createSnowflakes = () => {
    const snowContainer = document.querySelector('.snow-container');
    for (let i = 0; i < 100; i++) {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.style.left = Math.random() * 100 + 'vw'; // Posisi horizontal acak
        snowflake.style.animationDuration = Math.random() * 3 + 2 + 's'; // Durasi acak antara 2 dan 5 detik
        snowflake.style.opacity = Math.random(); // Opasitas acak
        snowContainer.appendChild(snowflake);
    }
};

document.addEventListener('DOMContentLoaded', createSnowflakes);

window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.section');
    const scrollPosition = window.scrollY + window.innerHeight;

    sections.forEach(section => {
        if (scrollPosition > section.offsetTop + 50) {
            section.classList.add('visible');
        }
    });
});
