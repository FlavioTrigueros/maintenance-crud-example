import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <div class="header">
      <div>
        <h1>Maintenance Manager</h1>
        <small>Angular + Spring Boot demo</small>
      </div>
      <div>
        <a routerLink="/">List</a> |
        <a routerLink="/create">New maintenance</a>
      </div>
    </div>
    <router-outlet></router-outlet>
  </div>
  `
})
export class AppComponent {}
