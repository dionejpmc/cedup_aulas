
-- Conecta ao banco de dados cedup
\c cedup;

-- Cria a tabela usuarios
CREATE TABLE IF NOT EXISTS usuarios (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    senha VARCHAR(255) NOT NULL,
    data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
-- Insere dados na tabela usuarios
INSERT INTO usuarios (nome, email, senha) VALUES
('João Paulo', 'joaopaulo@example.com', 'A5H10ic03eic091ex#'),
('Karine', 'karine@example.com', '@$Yuyh&787h8n8h'),
('João da Silva', 'joao.silva@example.com', 'senha123'),
('Maria Oliveira', 'maria.oliveira@example.com', 'senha456'),
('Carlos Souza', 'carlos.souza@example.com', 'senha789');