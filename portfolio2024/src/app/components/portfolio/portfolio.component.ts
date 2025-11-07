import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  @ViewChild('carouselSection', { static: false }) carouselSection!: ElementRef;
  
  projects = [
    {
      title: 'API Regular Show',
      tech: 'Python - FastAPI - Uvicorn',
      description: 'Desarrollo de API RESTful con endpoints para capítulos, personajes y temporadas. Proyecto orientado a la comunidad Open Source para libre uso a los fans de la serie.',
      images: [
        'assets/img/RegularShow.png',
        'assets/img/RegularShowAPI.png',
        'assets/img/RegularShowAPI2.png'
      ],
      repo: 'https://github.com/kevinp/regularshow-api',
      demo: 'https://regularshow-api.onrender.com'
    },
    {
      title: 'Soluciones Luis Maldonado',
      tech: 'HTML - CSS - JS',
      description: 'Landing page para cliente Soluciones Luis Maldonado, sitio web de presentacion de servicios de construccion para zonas rurales, enfocado en accesibilidad y diseño UX. Segun requerimientos del cliente, solicito un diseño simple y comodo especial para perseonas payores de edad con poco conocimiento en tecnologia, formularios listos para contactar rapido y facil. Landingpage esta esperando aprobacion de cotizacion de hosting para su fase a productivo',
      images: [
        'assets/img/SolucionesLMaldonado/SolucionesLMaldonado01.png',
        'assets/img/SolucionesLMaldonado/SolucionesLMaldonado02.png',
        'assets/img/SolucionesLMaldonado/SolucionesLMaldonado03.png',
      ],
      demo: 'https://kpbaldur.github.io/LuisMaldonadoSoluciones'
    },
    {
      title: 'TodoAppRoll v2.0 - Gestion de tareas con alarmas',
      tech: 'NodeJS - Express - React - Vite',
      description: 'Aplicacion Web para poder gestionar y crear alarmas para tareas y eventos, con notificaciones en tiempo real junto con administrador multimedia para personalizar las alarmas con un popup de notificacion. La aplicacion esta desarrollada para funcionar, de forma local como una solucion temporal para gestionar alarmas y tareas, con la posibilidad de expandirla en el futuro para ser utilizada en servidores y dispositivos remotos. La version 3 de TodoAppRoll sera una aplicacion de escritorio para poder gestionar de forma mas diversa las tareas y su uso.',
      images: [
        'assets/img/TodoAppRollv02/TodoAppRollV02.png',
        'assets/img/TodoAppRollv02/TodoAppRollV02-02.png',
        'assets/img/TodoAppRollv02/TodoAppRollV02-03.png'
      ],
      repo: 'https://github.com/kevinp/fundacion-rescata',
      demo: 'https://fundacion-rescata.cl'
    }
  ];

  selectedProject = this.projects[0];  
  currentImage = 0;
  animationDirection: 'left' | 'right' | 'fade' = 'fade';
  isAnimating = false;

  selectProject(project: any) {
    this.selectedProject = project;
    this.currentImage = 0;
    this.animationDirection = 'fade';
    
    // Scroll automático en móviles
    this.scrollToCarousel();
  }

  nextImage() {
    if (this.isAnimating) return;
    
    this.isAnimating = true;
    this.animationDirection = 'right';
    this.currentImage = (this.currentImage + 1) % this.selectedProject.images.length;
    
    // Reset animation after completion
    setTimeout(() => {
      this.isAnimating = false;
    }, 600);
  }

  prevImage() {
    if (this.isAnimating) return;
    
    this.isAnimating = true;
    this.animationDirection = 'left';
    this.currentImage = (this.currentImage - 1 + this.selectedProject.images.length) % this.selectedProject.images.length;
    
    // Reset animation after completion
    setTimeout(() => {
      this.isAnimating = false;
    }, 600);
  }

  getImageAnimationClass(): string {
    if (this.isAnimating) {
      switch (this.animationDirection) {
        case 'left':
          return 'slide-in-left';
        case 'right':
          return 'slide-in-right';
        default:
          return 'fade';
      }
    }
    return 'fade';
  }

  private scrollToCarousel() {
    // Solo hacer scroll en dispositivos móviles
    if (window.innerWidth <= 992 && this.carouselSection) {
      setTimeout(() => {
        this.carouselSection.nativeElement.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start' 
        });
      }, 100);
    }
  }
}
