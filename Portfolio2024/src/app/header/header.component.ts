import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  menuOpen: boolean = false;

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('es'); // Idioma por defecto
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  onLanguageChange(event: Event) {
    const selectedLang = (event.target as HTMLSelectElement).value;
    this.translate.use(selectedLang); // Cambiar idioma
  }
}
