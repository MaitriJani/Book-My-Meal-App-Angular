import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './employee-components/booking/booking.component';
import { EmployeeGuard } from 'src/app/auth/guards/employee-guard/employee.guard';

const routes: Routes = [
  {path: "booking", component: BookingComponent, canActivate:[EmployeeGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
