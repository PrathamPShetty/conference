import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component'; // Adjust the path if necessary
import { HeroComponent } from './components/hero/hero.component'; // Adjust the path if necessary
import { StyleCardsComponent } from './components/style-cards/style-cards.component'; // Adjust the path if necessary
import { FooterComponent } from './components/footer/footer.component'; // Adjust the path if necessary
import { SponsorsComponent } from './components/sponsors/sponsors.component';
import { SpeakerComponent } from './components/speaker/speaker.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    HeroComponent,
    StyleCardsComponent,
    FooterComponent,
    SponsorsComponent,
    SpeakerComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Ensure this is correct
})
export class AppComponent {
  title = 'conference';
}
