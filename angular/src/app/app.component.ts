import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { IframeAppComponent } from './iframe-app/iframe-app.component';
import { IframeGoogleMapComponent } from './iframe-google-map/iframe-google-map.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, IframeAppComponent, IframeGoogleMapComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular';
}
