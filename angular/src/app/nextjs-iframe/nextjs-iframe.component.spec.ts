import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextjsIframeComponent } from './nextjs-iframe.component';

describe('NextjsIframeComponent', () => {
  let component: NextjsIframeComponent;
  let fixture: ComponentFixture<NextjsIframeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NextjsIframeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NextjsIframeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
