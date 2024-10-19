import { Routes } from '@angular/router';
import { IframeGoogleMapComponent } from './iframe-google-map/iframe-google-map.component';
import { LocalIframeComponentComponent } from './local-iframe-component/local-iframe-component.component';

export const routes: Routes = [
  {path: 'google-map',  component: IframeGoogleMapComponent },
  {path: 'local-iframe',  component: LocalIframeComponentComponent },
];
