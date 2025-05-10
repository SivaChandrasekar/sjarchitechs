import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from "./components/about/about.component";
import { PortfolioComponent } from "./components/portfolio/portfolio.component";
import { ServicesComponent } from "./components/services/services.component";
import { VideoSectionComponent } from './components/video-section/video-section.component';


@Component({
  selector: 'app-root',
  imports: [HeaderComponent, HeroComponent, AboutComponent, PortfolioComponent, ServicesComponent,VideoSectionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'sjarchitects';
}
