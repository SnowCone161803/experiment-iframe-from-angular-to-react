import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChooserComponent } from './view-chooser.component';

describe('ViewChooserComponent', () => {
  let component: ViewChooserComponent;
  let fixture: ComponentFixture<ViewChooserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewChooserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewChooserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
