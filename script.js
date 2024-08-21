document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider');
    const slides = Array.from(slider.children);
    const totalWidth = slider.scrollWidth;

    // Duplicar los slides para crear el efecto túnel
    slides.forEach(slide => {
        const clone = slide.cloneNode(true);
        slider.appendChild(clone);
    });

    // Slider interactivo
    document.querySelector('.slider-container').addEventListener('mousedown', function(event) {
        const startX = event.pageX;
        const scrollLeft = this.scrollLeft;

        const onMouseMove = (event) => {
            const walk = (event.pageX - startX) * 3; // Ajusta la velocidad de desplazamiento
            this.scrollLeft = scrollLeft - walk;
        };

        const onMouseUp = () => {
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mouseup', onMouseUp);
        };

        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mouseup', onMouseUp);
    });
});
