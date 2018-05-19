import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RpVideoComponent } from './rp-video.component';

describe('RpVideoComponent', () => {
  let component: RpVideoComponent;
  let fixture: ComponentFixture<RpVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RpVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RpVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
