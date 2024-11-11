import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isMuted: boolean = false;

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit(): void {
    const video = this.el.nativeElement.querySelector("#home-video");
    if (video) {
      video.volume = 0.5;
      video.muted = this.isMuted;
    }
  }

  toggleMute(): void {
    const video = this.el.nativeElement.querySelector('#home-video');
    if (video) {
      video.muted = !video.muted;
      this.isMuted = video.muted;
    }
  }
}