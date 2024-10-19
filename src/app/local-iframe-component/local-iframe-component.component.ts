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
  count: number = 0

  iframeReady() {
    const source = this.iframeRef.nativeElement
    console.log("iframe source", source)
    this.currentUrl = this.iframeRef.nativeElement.src

    const contentWindow = this.iframeRef.nativeElement.contentWindow
    contentWindow.addEventListener("message", async (event: MessageEvent) => {
      if (event.data.target !== 'parent') {
        return
      }
      const data = JSON.stringify(event.data, null, 2)
      console.log("message received by parent", data)
      this.messageFromChild.next(data)
    })
  }

  postMessageToChild() {
    this.iframeRef.nativeElement.contentWindow.postMessage({
      from:'parent',
      message: 'from parent ',
      target: 'child',
      count: this.count,
    })
    ++this.count
  }
}
