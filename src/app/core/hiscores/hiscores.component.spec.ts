import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HiscoresComponent } from './hiscores.component';

describe('HiscoresComponent', () => {
  let component: HiscoresComponent;
  let fixture: ComponentFixture<HiscoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HiscoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HiscoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
