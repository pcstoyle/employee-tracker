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
        ("Minerva", "McGonagall", 2, "Albus Dumbledore"),
        ("Severus", "Snape", 2, "Albus Dumbledore"),
        ("Argus", "Filch", 4, "Albus Dumbledore"),
        ("Mrs.", "Norris", 4, "Argus Filch"),
        ("Rubeus", "Hagrid", 3, "Albus Dumbledore"),
        ("Sybill", "Trelawney", 2, "Albus Dumbledore"),
        ("Filius", "Flitwick", 2, "Albus Dumbledore"),
        ("Gildroy", "Lockhart", 2, "Albus Dumbledore"),
        ("Winky", "Crouch", 5, "Albus Dumbledore"),
        ("Dobby", "Malfoy", 5, "Albus Dumbledore"),
        ("The Bloody", "Baron", 6, NULL),
        ("Moaning", "Myrtle", 6, NULL),
        ("Nearly Headless", "Nick", 6, NULL),
        ("Peeves", "the Ghost", 6, NULL);
