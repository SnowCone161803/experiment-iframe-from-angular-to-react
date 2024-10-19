import { AsyncPipe, DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { WindowRef } from '../window-ref';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AsyncPipe],
  templateUrl: './child-content.component.html',
  styleUrl: './child-content.component.css'
})
export class ChildContentComponent implements OnInit {
  title = 'other-angular';

  messageFromParent = new BehaviorSubject<string>("<none>")

  constructor(
    private route: ActivatedRoute,
    @Inject(DOCUMENT) private document: Document,
    private window: WindowRef,
  ) {}

  ngOnInit(): void {
    this.window.nativeWindow.addEventListener("message", (event: MessageEvent) => {
      if (event.data.target !== 'child') {
        return
      }
      this.messageFromParent.next(JSON.stringify(event.data))
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
      target: "parent",
    })
  }
}

