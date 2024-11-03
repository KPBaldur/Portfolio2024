import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit{
  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit(): void {
    const readMoreBtn = this.el.nativeElement.querySelector('.read-more-btn');
    const aboutMeText = this.el.nativeElement.querySelector('.about-me-text');
    if (readMoreBtn && aboutMeText) {
      this.renderer.listen(readMoreBtn, 'click', () => {
        aboutMeText.classList.toggle('expanded');
        readMoreBtn.textContent = aboutMeText.classList.contains('expanded') ? 'Mostrar Menos' : 'Saber Mas';
      });
    }
  }
}
