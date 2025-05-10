import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
declare var videojs: any;

@Component({
  selector: 'app-video-section',
  imports: [],
  templateUrl: './video-section.component.html',
  styleUrl: './video-section.component.scss'
})
export class VideoSectionComponent implements AfterViewInit {
  @ViewChild('targetPlayer', { static: false }) videoElement!: ElementRef;
  player: any;

  ngAfterViewInit(): void {
    this.player = videojs(this.videoElement.nativeElement);
  }

  togglePlay(): void {
    if (this.player.paused()) {
      this.player.play();
    } else {
      this.player.pause();
    }
  }
}
