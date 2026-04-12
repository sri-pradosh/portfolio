import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { HeroComponent } from "./components/hero/hero.component";
import { AboutComponent } from "./components/about/about.component";
import { PortfolioComponent } from "./components/portfolio/portfolio.component";
import { FooterComponent } from "./components/footer/footer.component";
import { ContactComponent } from "./components/contact/contact.component";
import { ServicesComponent } from "./components/services/services.component";
import { BookShelfComponent } from "./components/book-shelf/book-shelf.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: false,
  // imports: [HeaderComponent, HeroComponent, AboutComponent, ServicesComponent, PortfolioComponent, BookShelfComponent, ContactComponent, FooterComponent]
})
export class AppComponent implements OnInit {
  title = 'my-portfolio-app';

  constructor(private router: Router) {
    this.handleNavigation();
  }

  ngOnInit() {
    // Scroll to section when hash changes
    window.addEventListener('hashchange', () => {
      this.scrollToSection();
    });
    // Initial scroll on load
    setTimeout(() => this.scrollToSection(), 500);
  }

  handleNavigation() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.scrollToSection();
      }
    });
  }

  scrollToSection() {
    const hash = window.location.hash.substring(1);
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 0);
    }
  }
}
