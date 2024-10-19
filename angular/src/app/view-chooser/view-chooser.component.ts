import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IframeGoogleMapComponent } from '../iframe-google-map/iframe-google-map.component';

@Component({
  selector: 'app-view-chooser',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, IframeGoogleMapComponent],
  templateUrl: './view-chooser.component.html',
  styleUrl: './view-chooser.component.css'
})
export class ViewChooserComponent {

}
