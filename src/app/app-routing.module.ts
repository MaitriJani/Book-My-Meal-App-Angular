import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { noAuthGuard } from './auth/guards/noAuth-guard/no-auth.guard';

const routes: Routes = [
  {path: "login", component: LoginComponent, canActivate: [noAuthGuard]},
  {path: "employee", loadChildren: () => import("./modules/employee/employee.module").then(m => m.EmployeeModule)},
  {path: "admin", loadChildren: () => import("./modules/admin/admin.module").then(m => m.AdminModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
