INSERT INTO machine (id, code, name, location, model, created_at)
VALUES (1, 'MCH-001', 'Compresor A', 'Planta 1', 'C-2020', now()),
       (2, 'MCH-002', 'Bomba B', 'Planta 2', 'B-100', now());

INSERT INTO maintenance (id, machine_id, title, description, scheduled_date, status, cost, created_at, updated_at)
VALUES (1, 1, 'Cambio de filtro', 'Cambio filtro principal y lubricación', now()::date + 3, 'PENDING', 120.00, now(), now()),
       (2, 2, 'Chequeo general', 'Revisión de presión y funcionamiento', now()::date + 7, 'SCHEDULED', 80.00, now(), now());
