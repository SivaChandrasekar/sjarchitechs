import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  imports: [NgFor],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

  selectedProject: any = null;

projects = [
  {
    title: 'House 1',
    image: '../../../assets/interior01.jpg',
    description: 'Luxury home with modern interior design and spacious layout.',
     images: [
    'assets/interior01.jpg',
    'assets/interior02.jpg',
    'assets/interior03.jpg'
    ]
  },
  {
    title: 'House 2',
    image: '../../../assets/interior02.jpg',
    description: 'Cozy eco-friendly house with smart automation and green space.',
    images: [
    'assets/interior02.jpg',
    'assets/interior03.jpg',
    'assets/interior04.jpg'
    ]
  },
  {
    title: 'House 3',
    image: '../../../assets/interior03.jpg',
    description: 'Urban architecture with clean lines and natural lighting.',
    images: [
    'assets/interior03.jpg',
    'assets/interior04.jpg',
    'assets/interior05.jpg'
    ]
  },
  {
    title: 'House 4',
    image: '../../../assets/interior04.jpg',
    description: 'Elegant villa with large windows and minimalistic interiors.',
    images: [
    'assets/interior04.jpg',
    'assets/interior05.jpg',
    'assets/interior06.jpg'
    ]
  },
  {
    title: 'House 5',
    image: '../../../assets/interior05.jpg',
    description: 'Smart home equipped with AI-based security and solar panels.',
    images: [
    'assets/interior05.jpg',
    'assets/interior06.jpg',
    'assets/interior07.jpg'
    ]
  },
  {
    title: 'House 6',
    image: '../../../assets/interior06.jpg',
    description: 'Beach-facing property with wooden finish and open-plan design.',
    images: [
    'assets/interior06.jpg',
    'assets/interior07.jpg',
    'assets/interior08.jpg'
    ]
  },
  {
    title: 'House 7',
    image: '../../../assets/interior07.jpeg',
    description: 'Traditional-inspired design fused with modern comfort.',
    images: [
    'assets/interior07.jpg',
    'assets/interior08.jpg',
    'assets/interior09.jpg'
    ]
  },
  {
    title: 'House 8',
    image: '../../../assets/interior08.jpg',
    description: 'Futuristic house with floating stairs and ambient lighting.',
    images: [
    'assets/interior08.jpg',
    'assets/interior01.jpg',
    'assets/interior02.jpg'
    ]
  }
];

selectProject(project: any) {
  this.selectedProject = project;
}

}
