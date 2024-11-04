import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  showScrollTopBtn = false;

  scrollToTop() {
    window.scrollTo({ top:0, behavior: 'smooth'});
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.showScrollTopBtn = window.pageYOffset > 200;
  }
}
