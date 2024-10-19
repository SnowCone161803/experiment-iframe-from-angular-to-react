import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-local-iframe-component',
  standalone: true,
  imports: [],
  templateUrl: './local-iframe-component.component.html',
  styleUrl: './local-iframe-component.component.css'
})
export class LocalIframeComponentComponent implements OnInit {

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
