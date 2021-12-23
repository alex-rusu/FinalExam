import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaccinatedResidentComponent } from './vaccinated-resident.component';

describe('VaccinatedResidentComponent', () => {
  let component: VaccinatedResidentComponent;
  let fixture: ComponentFixture<VaccinatedResidentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VaccinatedResidentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VaccinatedResidentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
