package com.yourorg.maintenance.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.yourorg.maintenance.model.Maintenance;

public interface MaintenanceRepository extends JpaRepository<Maintenance, Long> {
}
