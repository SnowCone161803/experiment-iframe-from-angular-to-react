import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IframeGoogleMapComponent } from './iframe-google-map.component';

describe('IframeGoogleMapComponent', () => {
  let component: IframeGoogleMapComponent;
  let fixture: ComponentFixture<IframeGoogleMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IframeGoogleMapComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IframeGoogleMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
