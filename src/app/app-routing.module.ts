import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VaccinatedResidentComponent} from "./vaccinated-resident/vaccinated-resident.component";

const routes: Routes = [
{path:'VaccinatedResident', component:VaccinatedResidentComponent},
]
export const routing = RouterModule.forRoot(routes);
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }