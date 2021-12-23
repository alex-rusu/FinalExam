import { Component, OnInit } from '@angular/core';
import { ResidentService } from '../services/ResidentService';

@Component({
  selector: 'app-vaccinated-resident',
  templateUrl: './vaccinated-resident.component.html',
  styleUrls: ['./vaccinated-resident.component.css']
})
export class VaccinatedResidentComponent implements OnInit {

  constructor(private residentService: ResidentService) { }
  residents: any[] | undefined;
    selectedResident = {
      modules: [],
      id: undefined
    };
    ngOnInit(): void {
      this.residentService.findAllResidents()
        .then(residents => this.residents = residents)
    }
  
    selectResident(resident: any) {
      this.selectedResident = resident;
    }
  }
