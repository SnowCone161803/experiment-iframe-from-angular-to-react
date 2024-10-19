import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IframeAppComponent } from './iframe-app/iframe-app.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, IframeAppComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular';
}
