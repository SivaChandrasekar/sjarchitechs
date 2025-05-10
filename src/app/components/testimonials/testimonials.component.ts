import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  imports: [NgFor],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent {
testimonials = [
  {
    name: 'Aarav S.',
    position: 'Homeowner',
    feedback: 'SJarchitects turned my dream home into reality. Their attention to detail was unmatched.'
  },
  {
    name: 'Meera V.',
    position: 'Interior Designer',
    feedback: 'They blend form and function beautifully. The result was both elegant and efficient.'
  },
  {
    name: 'Ravi K.',
    position: 'Builder Partner',
    feedback: 'Working with them was seamless — on time, on budget, and above expectations.'
  }
];

}
