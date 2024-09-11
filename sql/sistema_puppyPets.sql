-- Creación de la base de datos
DROP DATABASE sistema_puppyPets;
create database if not exists sistema_puppyPets;
use sistema_puppyPets;

-- Creación de tablas
drop table mensajes;
CREATE TABLE IF NOT EXISTS mensajes(
	id_mensaje INT AUTO_INCREMENT primary key,
    nombre_mensaje VARCHAR(30) not null,
    telefono_mensaje varchar(5) not null,
    email_mensaje varchar(40) not null,
    descripcion_mensaje varchar(125)
);

INSERT INTO mensajes(nombre_mensaje, telefono_mensaje, email_mensaje, descripcion_mensaje) VALUES 
('Juan', '55555', 'juan123@gmail.com', 'Saludos desde Lima'),
('Pedro', '33333', 'pedro987@gmail.com', 'Simplemente Grandiosos'),
('Luis', '77777', 'luis@456@gmail.com','Disculpe, atienden a domicilio?')
;
select * from mensajes;