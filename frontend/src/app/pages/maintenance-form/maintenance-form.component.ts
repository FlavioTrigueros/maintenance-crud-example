import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Maintenance } from '../../shared/models/maintenance.model';
import { MaintenanceService } from '../../services/maintenance.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-maintenance-form',
  templateUrl: './maintenance-form.component.html',
  styleUrls: ['./maintenance-form.component.css']
})
export class MaintenanceFormComponent implements OnInit {
  form!: FormGroup;
  id?: number;
  loading = false;

  constructor(
    private fb: FormBuilder,
    private svc: MaintenanceService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id')) || undefined;
    this.form = this.fb.group({
      machineId: [null, Validators.required],
      title: ['', Validators.required],
      description: [''],
      scheduledDate: ['', Validators.required],
      status: ['PENDING'],
      cost: [0, [Validators.min(0)]]
    });

    if (this.id) this.load();
  }

  load(): void {
    if (!this.id) return;
    this.loading = true;
    this.svc.get(this.id).subscribe({
      next: m => {
        this.form.patchValue({
          machineId: m.machineId,
          title: m.title,
          description: m.description,
          scheduledDate: m.scheduledDate,
          status: m.status,
          cost: m.cost || 0
        });
        this.loading = false;
      },
      error: e => { console.error(e); this.loading = false; alert('No se pudo cargar'); }
    });
  }

  submit(): void {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }
    const payload: Maintenance = this.form.value;
    this.loading = true;
    if (this.id) {
      this.svc.update(this.id, payload).subscribe({
        next: () => { this.loading = false; this.router.navigate(['/']); },
        error: err => { console.error(err); this.loading = false; alert('Error actualizando'); }
      });
    } else {
      this.svc.create(payload).subscribe({
        next: () => { this.loading = false; this.router.navigate(['/']); },
        error: err => { console.error(err); this.loading = false; alert('Error creando'); }
      });
    }
  }
}
