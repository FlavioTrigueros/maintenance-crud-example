package com.example.maintenance.model;

import jakarta.persistence.*;
import java.time.OffsetDateTime;

@Entity
@Table(name = "machine")
public class Machine {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable=false, unique=true, length=50)
    private String code;

    @Column(nullable=false)
    private String name;

    private String location;
    private String model;

    @Column(name="created_at")
    private OffsetDateTime createdAt = OffsetDateTime.now();

}
