import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroHeaderComponent } from './hero-header.component';

describe('HeroHeaderComponent', () => {
  let component: HeroHeaderComponent;
  let fixture: ComponentFixture<HeroHeaderComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
