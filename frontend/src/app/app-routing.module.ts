import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaintenanceListComponent } from './pages/maintenance-list/maintenance-list.component';
import { MaintenanceFormComponent } from './pages/maintenance-form/maintenance-form.component';
import { MaintenanceDetailComponent } from './pages/maintenance-detail/maintenance-detail.component';

const routes: Routes = [
  { path: '', component: MaintenanceListComponent },
  { path: 'create', component: MaintenanceFormComponent },
  { path: 'edit/:id', component: MaintenanceFormComponent },
  { path: 'detail/:id', component: MaintenanceDetailComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
