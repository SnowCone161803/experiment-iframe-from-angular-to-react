import { AsyncPipe } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-local-iframe-component',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './local-iframe-component.component.html',
  styleUrl: './local-iframe-component.component.css'
})
export class LocalIframeComponentComponent {

  @ViewChild('iframeref')
  iframeRef: any

  currentUrl: string = "<unknown>";
  messageFromChild = new BehaviorSubject<string>("<none>")
  idFromChild = new BehaviorSubject<string>("<none>")

  iframeReady() {
    const source = this.iframeRef.nativeElement
    console.log("iframe source", source)
    this.currentUrl = this.iframeRef.nativeElement.src

    const contentWindow = this.iframeRef.nativeElement.contentWindow
    contentWindow.addEventListener("message", (event: MessageEvent) => {
      this.messageFromChild.next(event.data.summary)
      this.idFromChild.next(event.data.someId)
    })
  }
}
