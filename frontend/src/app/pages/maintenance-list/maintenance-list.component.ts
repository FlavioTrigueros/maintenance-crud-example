import { Component, OnInit } from '@angular/core';
import { Maintenance } from '../../shared/models/maintenance.model';
import { MaintenanceService } from '../../services/maintenance.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-maintenance-list',
  templateUrl: './maintenance-list.component.html',
  styleUrls: ['./maintenance-list.component.css']
})
export class MaintenanceListComponent implements OnInit {
  maintenances: Maintenance[] = [];
  loading = false;
  filterStatus = '';

  constructor(private svc: MaintenanceService, private router: Router) {}

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.loading = true;
    const obs = this.filterStatus ? this.svc.listByStatus(this.filterStatus) : this.svc.list();
    obs.subscribe({
      next: data => { this.maintenances = data; this.loading = false; },
      error: err => { console.error(err); this.loading = false; alert('Error cargando mantenimientos'); }
    });
  }

  remove(id?: number): void {
    if (!id) return;
    if (!confirm('¿Eliminar este mantenimiento?')) return;
    this.svc.delete(id).subscribe({
      next: () => this.load(),
      error: err => { console.error(err); alert('No se pudo eliminar'); }
    });
  }

  edit(id?: number) {
    if (!id) return;
    this.router.navigate(['/edit', id]);
  }

  detail(id?: number) {
    if (!id) return;
    this.router.navigate(['/detail', id]);
  }
}
