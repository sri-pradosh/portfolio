import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
   standalone: false
})
export class PortfolioComponent {
   activeFilter = 'All';
  
  filters = ['All', 'Web Development'
    // , 'Mobile App', 'UI/UX Design'
  ];
  
  projects = [
    {
      title: 'Warehouse Management System',
      description: 'A modern system built with HTML,CSS and JS for real-time inventory tracking, order management, and role-based access control.',
      image: 'assets/project_images/warehouse_management.png',
      technologies: ['HTML','CSS','JS'],
      category: 'Web Development',
      liveUrl: 'https://sripradosh.github.io/firstproject/index.html',
      githubUrl: 'https://github.com/sri-pradosh'
    },
    // {
    //   title: 'Task Management App',
    //   description: 'A collaborative task management application with real-time updates and team collaboration features.',
    //   image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    //   technologies: ['React Native', 'Firebase', 'Redux'],
    //   category: 'Mobile App',
    //   liveUrl: '#',
    //   githubUrl: '#'
    // },
    // {
    //   title: 'Brand Identity Design',
    //   description: 'Complete brand identity design including logo, color palette, and design system for a tech startup.',
    //   image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    //   technologies: ['Figma', 'Adobe Illustrator', 'Photoshop'],
    //   category: 'UI/UX Design',
    //   liveUrl: '#',
    //   githubUrl: '#'
    // },
    // {
    //   title: 'Restaurant Website',
    //   description: 'A responsive restaurant website with online ordering system and table reservation functionality.',
    //   image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    //   technologies: ['Vue.js', 'Express', 'PostgreSQL'],
    //   category: 'Web Development',
    //   liveUrl: '#',
    //   githubUrl: '#'
    // },
    // {
    //   title: 'Fitness Tracking App',
    //   description: 'A comprehensive fitness tracking mobile app with workout plans and progress monitoring.',
    //   image: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    //   technologies: ['Flutter', 'Dart', 'SQLite'],
    //   category: 'Mobile App',
    //   liveUrl: '#',
    //   githubUrl: '#'
    // },
    // {
    //   title: 'Dashboard UI Design',
    //   description: 'Modern dashboard interface design for a SaaS analytics platform with data visualization.',
    //   image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    //   technologies: ['Figma', 'Sketch', 'Principle'],
    //   category: 'UI/UX Design',
    //   liveUrl: '#',
    //   githubUrl: '#'
    // }
  ];
  
  get filteredProjects() {
    if (this.activeFilter === 'All') {
      return this.projects;
    }
    return this.projects.filter(project => project.category === this.activeFilter);
  }
  
  setActiveFilter(filter: string) {
    this.activeFilter = filter;
  }
}
