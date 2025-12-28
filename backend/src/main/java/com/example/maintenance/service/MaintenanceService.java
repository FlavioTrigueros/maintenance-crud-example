package com.example.maintenance.service;

import com.example.maintenance.dto.CreateMaintenanceDTO;
import com.example.maintenance.dto.MaintenanceDTO;
import java.util.List;

public interface MaintenanceService {
    List<MaintenanceDTO> findAll();
    MaintenanceDTO findById(Long id);
    MaintenanceDTO create(CreateMaintenanceDTO dto);
    MaintenanceDTO update(Long id, CreateMaintenanceDTO dto);
    void delete(Long id);
    List<MaintenanceDTO> findByStatus(String status);
}
