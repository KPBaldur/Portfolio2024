import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit(): void {
    const video = this.el.nativeElement.querySelector('#home-video');
    if (video) {
      this.renderer.listen(video, 'mouseenter', () => {
        video.muted = false;
      });

      this.renderer.listen(video, 'mouseleave', () => {
        video.muted = true;
      })
    }
  }
}

