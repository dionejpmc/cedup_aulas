CREATE TABLE IF NOT EXISTS usuarios 


(id SERIAL PRIMARY KEY,nome VARCHAR(100) NOT NULL,
	email VARCHAR(100) UNIQUE NOT NULL,
	senha VARCHAR(255) NOT NULL);





INSERT INTO usuarios (nome, email, senha) VALUES('Nome do Usuário', 'usuario@email.com', 'senha123');

