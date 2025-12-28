package com.example.maintenance.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import java.math.BigDecimal;
import java.time.LocalDate;

public class CreateMaintenanceDTO {
    @NotNull
    private Long machineId;

    @NotBlank
    private String title;

    private String description;

    @NotNull
    private LocalDate scheduledDate;

    private BigDecimal cost;

    // getters & setters
}
