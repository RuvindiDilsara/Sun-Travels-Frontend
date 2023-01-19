import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailedContractComponent } from './components/detailed-contract/detailed-contract.component';
import { ContractComponent } from './contract/contract.component';
import { HomeComponent } from './home/home.component';
import { HotelComponent } from './hotel/hotel.component';

const routes: Routes = [
  { path: 'hotels', component: HotelComponent},
  { path: 'contracts', component: ContractComponent},
  { path: '', component: HomeComponent},
  { path: 'contracts/:contractId', component: DetailedContractComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HotelComponent, ContractComponent, HomeComponent]
