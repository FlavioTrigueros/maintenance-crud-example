package com.example.maintenance.controller;

import com.example.maintenance.dto.CreateMaintenanceDTO;
import com.example.maintenance.dto.MaintenanceDTO;
import com.example.maintenance.service.MaintenanceService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/maintenances")
public class MaintenanceController {

    private final MaintenanceService service;

    public MaintenanceController(MaintenanceService service) {
        this.service = service;
    }

    @GetMapping
    public ResponseEntity<List<MaintenanceDTO>> list(@RequestParam(value="status", required = false) String status) {
        if (status != null) {
            return ResponseEntity.ok(service.findByStatus(status));
        }
        return ResponseEntity.ok(service.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<MaintenanceDTO> get(@PathVariable Long id) {
        return ResponseEntity.ok(service.findById(id));
    }

    @PostMapping
    public ResponseEntity<MaintenanceDTO> create(@Valid @RequestBody CreateMaintenanceDTO dto) {
        MaintenanceDTO created = service.create(dto);
        return ResponseEntity.status(201).body(created);
    }

    @PutMapping("/{id}")
    public ResponseEntity<MaintenanceDTO> update(@PathVariable Long id, @Valid @RequestBody CreateMaintenanceDTO dto) {
        return ResponseEntity.ok(service.update(id, dto));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }
}
