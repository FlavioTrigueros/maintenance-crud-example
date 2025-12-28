import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module'; // <= importante
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
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
