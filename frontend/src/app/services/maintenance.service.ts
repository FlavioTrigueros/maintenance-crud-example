import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Maintenance } from '../shared/models/maintenance.model';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MaintenanceService {
  private base = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  list(): Observable<Maintenance[]> {
    return this.http.get<Maintenance[]>(this.base);
  }

  get(id: number): Observable<Maintenance> {
    return this.http.get<Maintenance>(`${this.base}/${id}`);
  }

  create(payload: Maintenance): Observable<Maintenance> {
    return this.http.post<Maintenance>(this.base, payload);
  }

  update(id: number, payload: Maintenance): Observable<Maintenance> {
    return this.http.put<Maintenance>(`${this.base}/${id}`, payload);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.base}/${id}`);
  }

  listByStatus(status: string) {
    return this.http.get<Maintenance[]>(`${this.base}?status=${encodeURIComponent(status)}`);
  }
}
