import { Routes } from '@angular/router';
import { IframeGoogleMapComponent } from './iframe-google-map/iframe-google-map.component';
import { LocalIframeComponentComponent } from './local-iframe-component/local-iframe-component.component';
import { ViewChooserComponent } from './view-chooser/view-chooser.component';
import { ChildContentComponent } from './child-content/child-content.component';

export const routes: Routes = [
  {path: '',  component: ViewChooserComponent },
  {path: 'google-map',  component: IframeGoogleMapComponent },
  {path: 'local-iframe',  component: LocalIframeComponentComponent },
  {path: 'child-content',  component: ChildContentComponent },
];
