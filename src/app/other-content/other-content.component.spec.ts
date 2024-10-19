import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherContentComponent } from './other-content.component';

describe('OtherContentComponent', () => {
  let component: OtherContentComponent;
  let fixture: ComponentFixture<OtherContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OtherContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtherContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
