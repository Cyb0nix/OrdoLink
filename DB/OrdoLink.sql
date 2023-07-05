create table if not exists patient
(
    id        uuid default gen_random_uuid() not null,
    num_secu  bigint                         not null,
    lastname  varchar(50)                    not null,
    firstname varchar(50)                    not null,
    primary key (id),
    unique (num_secu)
);

create table if not exists pharmacien
(
    id              uuid default gen_random_uuid() not null,
    lastname        varchar(50)                    not null,
    firstname       varchar(50)                    not null,
    rpps            bigint                         not null,
    rpps_expiration date,
    constraint pharmatien_pkey
        primary key (id)
);

create table if not exists medecintype
(
    id           uuid default gen_random_uuid() not null,
    medecin_type varchar(50)                    not null,
    primary key (id),
    unique (medecin_type)
);

create table if not exists medecin
(
    id              uuid default gen_random_uuid() not null,
    rpps            varchar(12)                    not null,
    phone_number    varchar(50)                    not null,
    lastname        varchar(50)                    not null,
    firstname       varchar(50)                    not null,
    adresse         varchar(50)                    not null,
    name            varchar(50)                    not null,
    rpps_expiration date                           not null,
    type_id         uuid,
    primary key (id),
    unique (rpps),
    unique (phone_number),
    constraint type_id
        foreign key (type_id) references medecintype
);

create table if not exists ordonnance
(
    id                uuid default gen_random_uuid() not null,
    prescription_date date                           not null,
    medecin_id        uuid                           not null,
    patient_id        uuid,
    primary key (id),
    foreign key (medecin_id) references medecin
        on update cascade on delete cascade,
    constraint ordonnance_patient_id_fk
        foreign key (patient_id) references patient
);

create table if not exists prescription
(
    id            uuid default gen_random_uuid() not null,
    medecine      varchar(50)                    not null,
    posologie     varchar(300)                   not null,
    renewale      integer                        not null,
    given         boolean                        not null,
    ordonnance_id uuid                           not null,
    quantity      integer,
    primary key (id),
    constraint prescription_ordennance_id_fkey
        foreign key (ordonnance_id) references ordonnance
            on update cascade on delete cascade
);

create table if not exists users
(
    id                    uuid default gen_random_uuid() not null,
    email                 varchar(50)                    not null,
    password              varchar(200)                   not null,
    pwd_is_tmp            boolean                        not null,
    tmp_pwd_creation_date timestamp,
    admin                 boolean,
    constraint user_client_pkey
        primary key (id),
    constraint user_client_mail_key
        unique (email)
);

create table if not exists liste_medecin_patient
(
    medecin_id uuid not null,
    patient_id uuid not null,
    primary key (medecin_id, patient_id),
    foreign key (medecin_id) references medecin
        on update cascade on delete cascade,
    foreign key (patient_id) references patient
        on update cascade on delete cascade
);

create table if not exists account_type
(
    user_id uuid        not null,
    type_id uuid        not null,
    type    varchar(50) not null,
    constraint id
        primary key (user_id, type_id),
    constraint account_type_users_id_fk
        foreign key (user_id) references users
            on update cascade on delete cascade
);

create unique index if not exists account_type_user_id_uindex
    on account_type (user_id);

create table if not exists tokens
(
    id              uuid default gen_random_uuid() not null,
    user_id         uuid                           not null,
    token           uuid                           not null,
    expiration_date timestamp                      not null,
    constraint tokens_users_id_fk
        foreign key (user_id) references users
            on update cascade on delete cascade
);

