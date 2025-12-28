import { Component, OnInit } from '@angular/core';
import { Maintenance } from '../../shared/models/maintenance.model';
import { MaintenanceService } from '../../services/maintenance.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-maintenance-detail',
  templateUrl: './maintenance-detail.component.html',
  styleUrls: ['./maintenance-detail.component.css']
})
export class MaintenanceDetailComponent implements OnInit {
  m?: Maintenance;
  loading = false;
  id?: number;

  constructor(private svc: MaintenanceService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id')) || undefined;
    if (this.id) this.load();
  }

  load(): void {
    if (!this.id) return;
    this.loading = true;
    this.svc.get(this.id).subscribe({
      next: data => { this.m = data; this.loading = false; },
      error: e => { console.error(e); this.loading = false; alert('Error cargando detalle'); }
    });
  }
}
