CREATE TABLE Patient(
   id uuid DEFAULT gen_random_uuid(),
   num_secu INT NOT NULL,
   lastname VARCHAR(50) NOT NULL,
   surname VARCHAR(50) NOT NULL,
   PRIMARY KEY(id),
   UNIQUE(num_secu)
);

CREATE TABLE Pharmatien(
   id uuid DEFAULT gen_random_uuid(),
   lastname VARCHAR(50) NOT NULL,
   firstname VARCHAR(50) NOT NULL,
   rpps INT NOT NULL,
   PRIMARY KEY(id)
);

CREATE TABLE MedecinType(
   id uuid DEFAULT gen_random_uuid(),
   medecin_type VARCHAR(50) NOT NULL,
   PRIMARY KEY(id),
   UNIQUE(medecin_type)
);

CREATE TABLE Medecin(
   id uuid DEFAULT gen_random_uuid(),
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
   id uuid DEFAULT gen_random_uuid(),
   prescription_date DATE NOT NULL,
   medecin_id INT NOT NULL,
   PRIMARY KEY(id),
   FOREIGN KEY(medecin_id) REFERENCES Medecin(id)
);

CREATE TABLE Prescription(
   id uuid DEFAULT gen_random_uuid(),
   medecine VARCHAR(50) NOT NULL,
   presciption VARCHAR(50) NOT NULL,
   renewale INT NOT NULL,
   given BOOLEAN NOT NULL,
   ordennance_id INT NOT NULL,
   PRIMARY KEY(id),
   FOREIGN KEY(ordennance_id) REFERENCES Ordonnance(id)
);

CREATE TABLE User_client(
   id uuid DEFAULT gen_random_uuid(),
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

create table account_type
(
    user_id uuid not null
        constraint account_type_users_id_fk
            references users,
    type_id uuid not null
        constraint type
            references medecin
        constraint type2
            references patient
        constraint type3
            references pharmatien,
    constraint id
        primary key (user_id, type_id)
);
