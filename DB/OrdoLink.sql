CREATE TABLE Patient(
   id UUID DEFAULT uuid_generate_v4 (),
   num_secu INT NOT NULL,
   lastname VARCHAR(50) NOT NULL,
   surname VARCHAR(50) NOT NULL,
   PRIMARY KEY(id),
   UNIQUE(num_secu)
);

CREATE TABLE Pharmatien(
   id UUID DEFAULT uuid_generate_v4 (),
   lastname VARCHAR(50) NOT NULL,
   firstname VARCHAR(50) NOT NULL,
   rpps INT NOT NULL,
   PRIMARY KEY(id)
);

CREATE TABLE MedecinType(
   id UUID DEFAULT uuid_generate_v4 (),
   medecin_type VARCHAR(50) NOT NULL,
   PRIMARY KEY(id),
   UNIQUE(medecin_type)
);

CREATE TABLE Medecin(
   id UUID DEFAULT uuid_generate_v4 (),
   rpps VARCHAR(12) NOT NULL,
   phone_number VARCHAR(50) NOT NULL,
   lastname VARCHAR(50) NOT NULL,
   firstname VARCHAR(50) NOT NULL,
   adresse VARCHAR(50) NOT NULL,
   name VARCHAR(50) NOT NULL,
   rpps_expiration DATE NOT NULL,
   type_id INT NOT NULL,
   PRIMARY KEY(id),
   UNIQUE(rpps),
   UNIQUE(phone_number),
   FOREIGN KEY(type_id) REFERENCES MedecinType(id)
);

CREATE TABLE Ordonnance(
   id UUID DEFAULT uuid_generate_v4 (),
   prescription_date DATE NOT NULL,
   medecin_id INT NOT NULL,
   PRIMARY KEY(id),
   FOREIGN KEY(medecin_id) REFERENCES Medecin(id)
);

CREATE TABLE Prescription(
   id UUID DEFAULT uuid_generate_v4 (),
   medecine VARCHAR(50) NOT NULL,
   presciption VARCHAR(50) NOT NULL,
   renewale INT NOT NULL,
   given BOOLEAN NOT NULL,
   ordennance_id INT NOT NULL,
   PRIMARY KEY(id),
   FOREIGN KEY(ordennance_id) REFERENCES Ordonnance(id)
);

CREATE TABLE User_client(
   id UUID DEFAULT uuid_generate_v4 (),
   mail VARCHAR(50) NOT NULL,
   Password VARCHAR(50) NOT NULL,
   pwd_is_tmp BOOLEAN NOT NULL,
   tmp_pwd_creation_date DATE NOT NULL,
   pharmatien_id INT NOT NULL,
   patient_id INT NOT NULL,
   medecin_id INT NOT NULL,
   PRIMARY KEY(id),
   UNIQUE(pharmatien_id),
   UNIQUE(patient_id),
   UNIQUE(medecin_id),
   UNIQUE(mail),
   FOREIGN KEY(pharmatien_id) REFERENCES Pharmatien(id),
   FOREIGN KEY(patient_id) REFERENCES Patient(id),
   FOREIGN KEY(medecin_id) REFERENCES Medecin(id)
);

CREATE TABLE Liste_Medecin_Patient(
   medecin_id INT,
   patient_id INT,
   PRIMARY KEY(medecin_id, patient_id),
   FOREIGN KEY(medecin_id) REFERENCES Medecin(id),
   FOREIGN KEY(patient_id) REFERENCES Patient(id)
);
