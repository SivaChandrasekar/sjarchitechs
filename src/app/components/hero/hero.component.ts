import { Component } from '@angular/core';
import * as AOS from 'aos'

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

  ngOnInit(): void {
    AOS.init({
      duration: 1000, // animation duration    
    });
  }
  
}
