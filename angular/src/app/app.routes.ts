import { Routes } from '@angular/router';
import { IframeGoogleMapComponent } from './iframe-google-map/iframe-google-map.component';
import { LocalIframeComponentComponent } from './local-iframe-component/local-iframe-component.component';
import { ViewChooserComponent } from './view-chooser/view-chooser.component';
import { OtherContentComponent } from './other-content/other-content.component';

export const routes: Routes = [
  {path: '',  component: ViewChooserComponent },
  {path: 'google-map',  component: IframeGoogleMapComponent },
  {path: 'local-iframe',  component: LocalIframeComponentComponent },
  {path: 'other-content',  component: OtherContentComponent },
];
