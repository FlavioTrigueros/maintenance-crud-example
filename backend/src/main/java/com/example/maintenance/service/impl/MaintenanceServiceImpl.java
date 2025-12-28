package com.example.maintenance.service.impl;

import com.example.maintenance.dto.CreateMaintenanceDTO;
import com.example.maintenance.dto.MaintenanceDTO;
import com.example.maintenance.mapper.MaintenanceMapper;
import com.example.maintenance.model.Machine;
import com.example.maintenance.model.Maintenance;
import com.example.maintenance.repository.MachineRepository;
import com.example.maintenance.repository.MaintenanceRepository;
import com.example.maintenance.service.MaintenanceService;
import com.example.maintenance.exception.ApiException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
public class MaintenanceServiceImpl implements MaintenanceService {

    private final MaintenanceRepository maintenanceRepository;
    private final MachineRepository machineRepository;

    public MaintenanceServiceImpl(MaintenanceRepository maintenanceRepository,
                                  MachineRepository machineRepository) {
        this.maintenanceRepository = maintenanceRepository;
        this.machineRepository = machineRepository;
    }

    @Override
    public List<MaintenanceDTO> findAll() {
        return maintenanceRepository.findAll()
                .stream()
                .map(MaintenanceMapper::toDto)
                .collect(Collectors.toList());
    }

    @Override
    public MaintenanceDTO findById(Long id) {
        Maintenance m = maintenanceRepository.findById(id)
                .orElseThrow(() -> new ApiException.NotFound("Maintenance not found: " + id));
        return MaintenanceMapper.toDto(m);
    }

    @Override
    public MaintenanceDTO create(CreateMaintenanceDTO dto) {
        Machine machine = machineRepository.findById(dto.getMachineId())
                .orElseThrow(() -> new ApiException.NotFound("Machine not found: " + dto.getMachineId()));
        Maintenance m = MaintenanceMapper.fromCreateDto(dto, machine);
        Maintenance saved = maintenanceRepository.save(m);
        return MaintenanceMapper.toDto(saved);
    }

    @Override
    public MaintenanceDTO update(Long id, CreateMaintenanceDTO dto) {
        Maintenance existing = maintenanceRepository.findById(id)
                .orElseThrow(() -> new ApiException.NotFound("Maintenance not found: " + id));
        Machine machine = machineRepository.findById(dto.getMachineId())
                .orElseThrow(() -> new ApiException.NotFound("Machine not found: " + dto.getMachineId()));

        existing.setMachine(machine);
        existing.setTitle(dto.getTitle());
        existing.setDescription(dto.getDescription());
        existing.setScheduledDate(dto.getScheduledDate());
        existing.setCost(dto.getCost());
        existing.setUpdatedAt(java.time.OffsetDateTime.now());

        return MaintenanceMapper.toDto(maintenanceRepository.save(existing));
    }

    @Override
    public void delete(Long id) {
        if (!maintenanceRepository.existsById(id)) {
            throw new ApiException.NotFound("Maintenance not found: " + id);
        }
        maintenanceRepository.deleteById(id);
    }

    @Override
    public List<MaintenanceDTO> findByStatus(String status) {
        Maintenance.Status s;
        try {
            s = Maintenance.Status.valueOf(status.toUpperCase());
        } catch (IllegalArgumentException ex) {
            throw new ApiException.BadRequest("Invalid status: " + status);
        }
        return maintenanceRepository.findByStatus(s).stream()
                .map(MaintenanceMapper::toDto)
                .collect(Collectors.toList());
    }
}
