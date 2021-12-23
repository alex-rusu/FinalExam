import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VaccinatedResidentComponent } from './vaccinated-resident/vaccinated-resident.component';
import { ResidentService } from './services/ResidentService';

@NgModule({
  declarations: [
    AppComponent,
    VaccinatedResidentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ResidentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
