import { Component , HostListener, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
interface Skill {
  title: string;
  description: string;
  icon: string;
}
@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.css'
})

export class About {

 

  @ViewChild('passionSection') passionSection!: ElementRef;
  inView: boolean = false;

  @HostListener('window:scroll', [])
  onScrolling() {
    const rect = this.passionSection.nativeElement.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    if (rect.top <= windowHeight - 100) {
      this.inView = true;
    }
  }

  @ViewChild('skillsSection') skillsSection!: ElementRef;
  // inView = false;

  skills = [
    { title: 'Front-End Development', description: 'Angular, HTML5, CSS3, Tailwind, JavaScript, TypeScript' },
    { title: 'UI/UX Styling', description: 'Responsive design, cross-browser compatibility' },
    { title: 'Version Control', description: 'Git, GitHub' },
    { title: 'API Integration', description: 'Fetching & displaying dynamic data in Angular' },
    { title: 'Other Skills', description: 'Problem-solving, debugging, performance optimization' },
    { title: 'Currently Learning', description: 'Node.js, Express, MongoDB' }
  ];

  @HostListener('window:scroll', [])
  onScroll() {
    const rect = this.skillsSection.nativeElement.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    if (rect.top <= windowHeight - 150) {
      this.inView = true;
    }
  }
}
