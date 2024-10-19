import { Component, ViewChild, OnInit } from '@angular/core';

@Component({
  selector: 'app-iframe-google-map',
  standalone: true,
  imports: [],
  templateUrl: './iframe-google-map.component.html',
  styleUrl: './iframe-google-map.component.css'
})
export class IframeGoogleMapComponent implements OnInit {

  @ViewChild('iframeref')
  iframeRef: any

  currentUrl: string = "<unknown>";

  async ngOnInit() {
    await new Promise( resolve => setTimeout(resolve, 1000) );
    const source = this.iframeRef.nativeElement
    console.log(`iframeref src:`, source)
    this.currentUrl = this.iframeRef.nativeElement.src
  }
}
