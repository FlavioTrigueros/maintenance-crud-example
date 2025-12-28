package com.example.maintenance;

import com.example.maintenance.model.Machine;
import com.example.maintenance.model.Maintenance;
import com.example.maintenance.model.Maintenance.Status;
import com.example.maintenance.repository.MachineRepository;
import com.example.maintenance.repository.MaintenanceRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.math.BigDecimal;
import java.time.LocalDate;

@Component
public class DataLoader implements CommandLineRunner {

    private final MachineRepository machineRepo;
    private final MaintenanceRepository maintenanceRepo;

    public DataLoader(MachineRepository machineRepo, MaintenanceRepository maintenanceRepo){
        this.machineRepo = machineRepo;
        this.maintenanceRepo = maintenanceRepo;
    }

    @Override
    public void run(String... args) throws Exception {
        if (machineRepo.count() == 0) {
            Machine m1 = new Machine();
            m1.setCode("MCH-001");
            m1.setName("Compresor A");
            m1.setLocation("Planta 1");
            m1.setModel("C-2020");
            machineRepo.save(m1);

            Machine m2 = new Machine();
            m2.setCode("MCH-002");
            m2.setName("Bomba B");
            m2.setLocation("Planta 2");
            m2.setModel("B-100");
            machineRepo.save(m2);

            Maintenance mm = new Maintenance();
            mm.setMachine(m1);
            mm.setTitle("Cambio de filtro");
            mm.setDescription("Cambio filtro principal y lubricación.");
            mm.setScheduledDate(LocalDate.now().plusDays(3));
            mm.setStatus(Status.PENDING);
            mm.setCost(BigDecimal.valueOf(120.00));
            maintenanceRepo.save(mm);
        }
    }
}
