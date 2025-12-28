import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MaintenanceListComponent } from './pages/maintenance-list/maintenance-list.component';
import { MaintenanceFormComponent } from './pages/maintenance-form/maintenance-form.component';
import { MaintenanceDetailComponent } from './pages/maintenance-detail/maintenance-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    MaintenanceListComponent,
    MaintenanceFormComponent,
    MaintenanceDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
