import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaljiProjekta } from './detalji-projekta';

describe('DetaljiProjekta', () => {
  let component: DetaljiProjekta;
  let fixture: ComponentFixture<DetaljiProjekta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetaljiProjekta],
    }).compileComponents();

    fixture = TestBed.createComponent(DetaljiProjekta);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
