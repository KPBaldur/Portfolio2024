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


/* MUTE DE VIDEO CON HOVER */
document.addEventListener("DOMContentLoaded", function() {
    var video = document.getElementById("home-video");

    video.addEventListener("mouseenter", function() {
        video.muted = false;
    });

    video.addEventListener("mouseleave", function() {
        video.muted = true;
    });
});

/* Envio de mensaje por formulario */
document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault();
  alert('Mensaje enviado correctamente');
});