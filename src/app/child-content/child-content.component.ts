import { AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
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
  count: number = 0

  constructor(
    private route: ActivatedRoute,
    private window: WindowRef,
  ) {}

  ngOnInit(): void {
    this.window.nativeWindow.addEventListener("message", async (event: MessageEvent) => {
      if (event.data.target !== 'child') {
        return
      }
      const data = JSON.stringify(event.data, null, 2)
      console.log("message received by child", data)
      this.messageFromParent.next(data)
    })
  }

  get fromParent(): Observable<string> {
    return this.route.queryParams.pipe(
      map(p => p['fromParent']),
    )
  }

  postMessageToParent() {
    this.window.nativeWindow.postMessage(JSON.stringify({
      summary: "message from child",
      someId: "id-from-child-1234",
      target: "parent",
      count: this.count,
    }))
    ++this.count
  }
}

