INSERT INTO department (name)
VALUES ("Administration"),
        ("Education"),
        ("Groundskeeping/Maintainance"),
        ("Security");

INSERT INTO role (role, salary, department)
VALUES ("Headmaster", 100000, 1),
        ("Professor", 75000, 2),
        ("Groundskeeper", 60000, 3),
        ("Caretaker", 45000, 3),
        ("House Elf", 0, 3),
        ("Ghost", 0, 4);

INSERT INTO employee (first_name, last_name, role_id, manager)
VALUES ("Albus", "Dumbledore", 1, NULL),
        ("Minerva", "McGonagall", 2, 1),
        ("Severus", "Snape", 2, 1),
        ("Argus", "Filch", 4, 1),
        ("Mrs.", "Norris", 4, 4),
        ("Rubeus", "Hagrid", 3, 1),
        ("Sybill", "Trelawney", 2, 1),
        ("Filius", "Flitwick", 2, 1),
        ("Gildroy", "Lockhart", 2, 1),
        ("Winky", "Crouch", 5, 1),
        ("Dobby", "Malfoy", 5, 1),
        ("The Bloody", "Baron", 6, NULL),
        ("Moaning", "Myrtle", 6, NULL),
        ("Nearly Headless", "Nick", 6, NULL),
        ("Peeves", "the Ghost", 6, NULL);
