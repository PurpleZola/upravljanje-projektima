import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrijavaComponent } from './prijava';

describe('Prijava', () => {
  let component: PrijavaComponent;
  let fixture: ComponentFixture<PrijavaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrijavaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PrijavaComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
