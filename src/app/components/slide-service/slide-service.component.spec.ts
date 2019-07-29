import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideServiceComponent } from './slide-service.component';

describe('SlideServiceComponent', () => {
  let component: SlideServiceComponent;
  let fixture: ComponentFixture<SlideServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
