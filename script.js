const slider = document.querySelector('.slider');

slider.addEventListener('mouseover', () => {
    slider.style.animationPlayState = 'paused';
});

slider.addEventListener('mouseout', () => {
    slider.style.animationPlayState = 'running';
});

document.querySelector('.read-more-btn').addEventListener('click', function() {
    const text = document.querySelector('.about-me-text');
    text.classList.toggle('expanded');
    this.textContent = text.classList.contains('expanded') ? 'Mostrar Menos' : 'Saber Mas';
  });
  
  document.querySelector('.show-pdf-btn').addEventListener('click', function() {
    window.open('/path/to/your/pdf.pdf', '_blank');
  });
  
  document.querySelector('.show-experience-btn').addEventListener('click', function() {
    window.open('/path/to/experience/page', '_blank');
  });