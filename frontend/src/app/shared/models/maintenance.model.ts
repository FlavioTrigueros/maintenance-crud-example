export interface Maintenance {
  id?: number;
  machineId?: number;
  machineName?: string;
  title: string;
  description?: string;
  scheduledDate: string; // ISO yyyy-mm-dd
  status?: 'PENDING' | 'SCHEDULED' | 'IN_PROGRESS' | 'DONE' | 'CANCELLED';
  cost?: number;
}
