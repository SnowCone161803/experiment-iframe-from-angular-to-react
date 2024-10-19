import { AsyncPipe, DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';

import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'other-angular';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    @Inject(DOCUMENT) private document: Document,
  ) {}

  get fromParent(): Observable<string> {
    return this.route.queryParams.pipe(
      map(p => p['fromParent']),
    )
  }

  changeQueryParameter() {
    console.log("ping")
    const buf = new ArrayBuffer(1);
    const mess: WindowPostMessageOptions = {
      transfer: [buf],
    }
    // const event = new Event("child-event", {})
    // this.document.defaultView?.postMessage(event)
    // this.document.defaultView?.postMessage(
    //   "from-child", "http://localhost:4201", [buf])
    this.document.defaultView?.postMessage("from-child")
  }
}
