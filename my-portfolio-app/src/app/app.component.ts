import { Component } from '@angular/core';
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
export class AppComponent {
  title = 'my-portfolio-app';
}
