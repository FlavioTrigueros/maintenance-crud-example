package com.example.maintenance.dto;

import java.math.BigDecimal;
import java.time.LocalDate;

public class MaintenanceDTO {
    private Long id;
    private Long machineId;
    private String machineName;
    private String title;
    private String description;
    private LocalDate scheduledDate;
    private String status;
    private BigDecimal cost;

    // getters & setters
}
