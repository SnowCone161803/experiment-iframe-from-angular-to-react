import { AsyncPipe, DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AsyncPipe],
  templateUrl: './other-content.component.html',
  styleUrl: './other-content.component.css'
})
export class OtherContentComponent {
  title = 'other-angular';

  constructor(
    private route: ActivatedRoute,
    @Inject(DOCUMENT) private document: Document,
  ) {}

  get fromParent(): Observable<string> {
    return this.route.queryParams.pipe(
      map(p => p['fromParent']),
    )
  }

  postMessageToParent() {
    console.log("ping")
    const buf = new ArrayBuffer(1);
    this.document.defaultView?.postMessage({
      summary: "message from child",
      someId: "id-from-child-1234",
    })
  }
}

