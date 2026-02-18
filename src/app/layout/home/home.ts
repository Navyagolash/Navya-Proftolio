import { Component, ElementRef, ViewChild, AfterViewInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import VanillaTilt from 'vanilla-tilt';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule,RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  skills = ["HTML/CSS", "Javascript", "Angular", "TypeScript", "RXJS", "API Integration"]
  tools = ["Visual Studio Code", "Git", "GitHub", "Bitbucket", "Canva", "Postman"]

  experience = [
    {
      company: 'Imperial Overseas Education',
      role: 'Frontend Developer (Angular)',
      duration: 'Dec 2023 – Present',
      description: [
        'Developed responsive UI components using Angular and Tailwind CSS.',
        'Worked on dynamic forms, modals, and reusable components for loan application and student services.',
        'Integrated APIs for document uploads, offer tracking, and dashboard features.',
        'Collaborated with backend and design teams to enhance user experience.',
        'Implemented state management using services and observables.'
      ],
      techStack: ['Angular ', 'TypeScript ', 'Tailwind CSS ', 'RxJS ', 'REST API ', 'Git ']
    }
  ]

  @ViewChild('tiltCard') tiltCard!: ElementRef;

  constructor(private el: ElementRef) { }


  // ngAfterViewInit() {
  //   VanillaTilt.init(this.tiltCard.nativeElement, {
  //     max: 15,
  //     speed: 400,
  //     glare: true,
  //     'max-glare': 0.3,
  //   });

  //   const observer = new IntersectionObserver((entries) => {
  //     entries.forEach(entry => {
  //       if (entry.isIntersecting) {
  //         const target = entry.target as HTMLElement;
  //         if (target.classList.contains('left')) {
  //           target.classList.add('animate-slide-left');
  //         } else if (target.classList.contains('right')) {
  //           target.classList.add('animate-slide-right');
  //         }
  //         target.classList.remove('hidden-section');
  //         observer.unobserve(target); // runs only once
  //       }
  //     });
  //   }, { threshold: 0.2 });

  //   const elements = this.el.nativeElement.querySelectorAll('.hidden-section');
  //   elements.forEach((el: Element) => observer.observe(el));
  // }



  @HostListener('window:scroll', [])
  onScroll() {
    this.checkSections();
  }

  checkSections() {
    const sections = document.querySelectorAll('.hidden-section');

    sections.forEach((section, index) => {
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top <= windowHeight - 100) {
        setTimeout(() => {
          section.classList.add('show');
        }, index * 200); // Stagger animation delay
      }
    });
  }
  projects = [
    {
      name: 'EduLoans Portal',
      description: 'A student loan platform with dynamic forms, document upload, and progress tracking dashboard.',
      tech: 'Angular, TypeScript, Tailwind CSS, RxJS, REST API',
      image: 'assets/projects/eduloans.png'
    },
    {
      name: 'Imperial Overseas Dashboard',
      description: 'Internal dashboard built for managing student applications, documents, and status modules.',
      tech: 'Angular, Tailwind CSS, TypeScript, RxJS',
      image: 'assets/projects/imperial.png'
    },
    {
      name: 'RedBus Clone',
      description: 'Responsive bus booking clone with search filters, seat layout, date selection, and API mocks.',
      tech: 'Angular, HTML/CSS, Bootstrap, TypeScript',
      image: 'assets/projects/redbus.png'
    }
  ];

  ngAfterViewInit(): void {
    this.checkSections(); // Run on load
    this.observeCards();
  }

  observeCards(): void {
    const cards = document.querySelectorAll(".card");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const card = entry.target as HTMLElement;
          card.classList.remove("opacity-0");

          if (card.dataset['animate'] === "left") {
            card.classList.remove("-translate-x-20");
          }
          else if (card.dataset['animate'] === "top") {
            card.classList.remove("-translate-y-20");
          }
          else if (card.dataset['animate'] === "right") {
            card.classList.remove("translate-x-20");
          }

          card.classList.add("transition-all", "duration-700");
          observer.unobserve(card);
        }
      });
    }, { threshold: 0.2 });

    cards.forEach((card) => observer.observe(card));
  }
}
