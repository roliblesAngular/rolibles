import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoliblesLibComponent } from './rolibles-lib.component';

describe('RoliblesLibComponent', () => {
  let component: RoliblesLibComponent;
  let fixture: ComponentFixture<RoliblesLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoliblesLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoliblesLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
