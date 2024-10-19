import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IframeAppComponent } from './iframe-app.component';

describe('IframeAppComponent', () => {
  let component: IframeAppComponent;
  let fixture: ComponentFixture<IframeAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IframeAppComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IframeAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
