import { AsyncPipe, DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { map, Observable } from 'rxjs';
import { WindowRef } from '../window-ref';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AsyncPipe],
  templateUrl: './other-content.component.html',
  styleUrl: './other-content.component.css'
})
export class OtherContentComponent implements OnInit {
  title = 'other-angular';

  constructor(
    private route: ActivatedRoute,
    @Inject(DOCUMENT) private document: Document,
    private window: WindowRef,
  ) {}

  ngOnInit(): void {
    this.document.addEventListener("message", (event: Event) => {
      console.log("event in child", event)
      // this.messageFromChild.next(event.data.summary)
      // this.idFromChild.next(event.data.someId)
    })
  }

  get fromParent(): Observable<string> {
    return this.route.queryParams.pipe(
      map(p => p['fromParent']),
    )
  }

  postMessageToParent() {
    console.log("ping")
    this.document.defaultView?.postMessage({
      summary: "message from child",
      someId: "id-from-child-1234",
    })
  }
}

