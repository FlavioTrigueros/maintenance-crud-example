package com.example.maintenance.mapper;

import com.example.maintenance.dto.CreateMaintenanceDTO;
import com.example.maintenance.dto.MaintenanceDTO;
import com.example.maintenance.model.Maintenance;
import com.example.maintenance.model.Machine;

public class MaintenanceMapper {

    public static MaintenanceDTO toDto(Maintenance m) {
        MaintenanceDTO dto = new MaintenanceDTO();
        dto.setId(m.getId());
        dto.setMachineId(m.getMachine().getId());
        dto.setMachineName(m.getMachine().getName());
        dto.setTitle(m.getTitle());
        dto.setDescription(m.getDescription());
        dto.setScheduledDate(m.getScheduledDate());
        dto.setStatus(m.getStatus().name());
        dto.setCost(m.getCost());
        return dto;
    }

    public static Maintenance fromCreateDto(CreateMaintenanceDTO dto, Machine machine) {
        Maintenance m = new Maintenance();
        m.setMachine(machine);
        m.setTitle(dto.getTitle());
        m.setDescription(dto.getDescription());
        m.setScheduledDate(dto.getScheduledDate());
        m.setCost(dto.getCost() != null ? dto.getCost() : java.math.BigDecimal.ZERO);
        m.setStatus(Maintenance.Status.PENDING);
        return m;
    }
}
