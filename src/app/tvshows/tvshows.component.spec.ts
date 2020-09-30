import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TVSHOWSComponent } from './tvshows.component';

describe('TVSHOWSComponent', () => {
  let component: TVSHOWSComponent;
  let fixture: ComponentFixture<TVSHOWSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TVSHOWSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TVSHOWSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
