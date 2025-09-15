import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  projects = [
    {
      title: 'API Regular Show',
      tech: 'Python - FastAPI - Uvicorn',
      description: 'Desarrollo de API RESTful con endpoints para capítulos, personajes y temporadas. Proyecto orientado a la comunidad Open Source para libre uso a los fans de la serie.',
      images: [
        '../../../assets/img/RegularShow.png',
        '../../../assets/img/RegularShowAPI.png',
        '../../../assets/img/RegularShowAPI2.png'
      ],
      repo: 'https://github.com/kevinp/regularshow-api',
      demo: 'https://regularshow-api.onrender.com'
    },
    {
      title: 'Unreal Engine Project',
      tech: 'Unreal Engine - C++',
      description: 'Desarrollo de mecánicas y sistemas de IA con Unreal Engine 5.',
      images: [
        'assets/img/unreal1.png',
        'assets/img/unreal2.png'
      ],
      repo: '',
      demo: ''
    },
    {
      title: 'Fundación Rescata',
      tech: 'HTML - CSS - JS',
      description: 'Sitio web para adopción de animales, enfocado en accesibilidad y diseño UX.',
      images: [
        'assets/img/rescata1.png',
        'assets/img/rescata2.png'
      ],
      repo: 'https://github.com/kevinp/fundacion-rescata',
      demo: 'https://fundacion-rescata.cl'
    },
    {
      title: 'Fundación Rescata',
      tech: 'HTML - CSS - JS',
      description: 'Sitio web para adopción de animales, enfocado en accesibilidad y diseño UX.',
      images: [
        'assets/img/rescata1.png',
        'assets/img/rescata2.png'
      ],
      repo: 'https://github.com/kevinp/fundacion-rescata',
      demo: 'https://fundacion-rescata.cl'
    }
  ];

  selectedProject = this.projects[0];  
  currentImage = 0;

  selectProject(project: any) {
    this.selectedProject = project;
    this.currentImage = 0;
  }

  nextImage() {
    this.currentImage = 
      this.currentImage = (this.currentImage + 1) % this.selectedProject.images.length;
  }

  prevImage() {
    this.currentImage =
      (this.currentImage - 1 + this.selectedProject.images.length) % this.selectedProject.images.length;
  }
}
