-- CRIAÇÃO DE TABELAS NA 3FN

-- Criação do banco de dados
CREATE DATABASE SiteDeJogos;
USE SiteDeJogos;

-- Tabela Jogos
CREATE TABLE Jogos (
    id_jogo INT AUTO_INCREMENT PRIMARY KEY,
    nome_jogo VARCHAR(100) NOT NULL,
    preco DECIMAL(10, 2) NOT NULL
);

-- Tabela Consoles
CREATE TABLE Consoles (
    id_console INT AUTO_INCREMENT PRIMARY KEY,
    nome_console VARCHAR(50) NOT NULL
);

-- Tabela Gêneros
CREATE TABLE Generos (
    id_genero INT AUTO_INCREMENT PRIMARY KEY,
    nome_genero VARCHAR(50) NOT NULL
);

-- Tabela Vendas
CREATE TABLE Vendas (
    id_venda INT AUTO_INCREMENT PRIMARY KEY,
    data_venda DATE NOT NULL,
    id_jogo INT,
    FOREIGN KEY (id_jogo) REFERENCES Jogos(id_jogo)
);

-- Tabela  Jogos-Consoles (relação N:N)
CREATE TABLE Jogos_Consoles (
    id_jogo INT,
    id_console INT,
    PRIMARY KEY (id_jogo, id_console),
    FOREIGN KEY (id_jogo) REFERENCES Jogos(id_jogo),
    FOREIGN KEY (id_console) REFERENCES Consoles(id_console)
);

-- Tabela  Jogos-Gêneros (relação N:N)
CREATE TABLE Jogos_Generos (
    id_jogo INT,
    id_genero INT,
    PRIMARY KEY (id_jogo, id_genero),
    FOREIGN KEY (id_jogo) REFERENCES Jogos(id_jogo),
    FOREIGN KEY (id_genero) REFERENCES Generos(id_genero)
);

-- Inserindo dados de teste

-- Jogos
INSERT INTO Jogos (nome_jogo, preco) VALUES
('Dead By Daylight', 99.90),
('Plants Vs Zombies', 29.90),
('Zelda', 199.99),
('FC 24', 259.90),
('WAC',79.90),
('The Companion', 16.99),
('Madden 25', 289.90);


-- Consoles
INSERT INTO Consoles (nome_console) VALUES
('PlayStation 5'),
('PlayStation 4'),
('Xbox One'),
('Nintendo Switch'),
('PC');

-- Gêneros
INSERT INTO Generos (nome_genero) VALUES
('Ação'),
('Aventura'),
('Esportes'),
('Indie'),
('Fantasia'),
('Corrida'),
('Tiro'),
('RPG');

-- Vendas
INSERT INTO Vendas (data_venda, id_jogo) VALUES
('2024-10-05', 7),
('2024-09-16', 6),
('2024-09-22', 5),
('2024-09-07', 4),
('2024-08-13', 3),
('2024-08-29', 2),
('2024-07-01', 1);

-- Relacionamentos entre Jogos e Consoles
INSERT INTO Jogos_Consoles (id_jogo, id_console) VALUES
(1, 1),
(1, 2),
(2, 2),
(3, 3);

-- Relacionamentos entre Jogos e Gêneros
INSERT INTO Jogos_Generos (id_jogo, id_genero) VALUES
(1, 1),
(1, 2),
(3, 3);

-- Consultas Simples 
-- Listar jogos e os consoles nos quais estão disponíveis

SELECT Jogos.nome_jogo, Consoles.nome_console
FROM Jogos
JOIN Jogos_Consoles ON Jogos.id_jogo = Jogos_Consoles.id_jogo
JOIN Consoles ON Jogos_Consoles.id_console = Consoles.id_console;

--Listar os jogos e seus gêneros
SELECT Jogos.nome_jogo, Generos.nome_genero
FROM Jogos
JOIN Jogos_Generos ON Jogos.id_jogo = Jogos_Generos.id_jogo
JOIN Generos ON Jogos_Generos.id_genero = Generos.id_genero;



