import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalIframeComponentComponent } from './local-iframe-component.component';

describe('LocalIframeComponentComponent', () => {
  let component: LocalIframeComponentComponent;
  let fixture: ComponentFixture<LocalIframeComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocalIframeComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocalIframeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
