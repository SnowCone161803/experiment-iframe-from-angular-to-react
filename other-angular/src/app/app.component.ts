import { AsyncPipe } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
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
    private route: ActivatedRoute
  ) {}

  get fromParent(): Observable<string> {
    this.route.queryParams.subscribe(console.log)
    const par = this.route.queryParams.pipe(
      map(p => p['fromParent']),
    )
    par.subscribe(console.log)
    return par
  }
}
