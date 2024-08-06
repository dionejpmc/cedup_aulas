import  { db } from "../db.js";


export const getUsers = (_,res) => {

	const query = "SELECT * FROM usuarios";

	db.query(query, (err,data) => {

		if (err)
			return res.json(err);
		 
		 return res.status(200).json(data.rows);
	});
};

export const addUser = (req, res) => {
  const values = [
    req.body.nome,
    req.body.email,
    req.body.senha,
  ];

  const q = "INSERT INTO usuarios (nome, email, senha) VALUES ($1, $2, $3)";

  db.query(q, values, (err) => {
    
    if (err) 
      return res.json(err);

    return res.status(200).json("Usuário criado com sucesso.");
  });
};

export const updateUser = (req, res) => {
  const q =
    "UPDATE usuarios SET `nome` = ?, `email` = ?, `senha` = ? WHERE `id` = ?";

  const values = [
    req.body.nome,
    req.body.email,
    req.body.senha,
  ];

  db.query(q, [...values, req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Usuário atualizado com sucesso.");
  });
};

export const deleteUser = (req, res) => {
  const q = "DELETE FROM usuarios WHERE id = $1";

  db.query(q, [req.params.id], (err) => {
    if (err) 
      return res.json(err);
    return res.status(200).json("Usuário deletado com sucesso.");
  });
};