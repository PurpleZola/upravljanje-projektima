import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PotvrdaBrisanja } from './potvrda-brisanja';

describe('PotvrdaBrisanja', () => {
  let component: PotvrdaBrisanja;
  let fixture: ComponentFixture<PotvrdaBrisanja>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PotvrdaBrisanja],
    }).compileComponents();

    fixture = TestBed.createComponent(PotvrdaBrisanja);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
