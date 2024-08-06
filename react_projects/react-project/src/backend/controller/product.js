import  { db } from "../db.js";


export const getProducts = (_,res) => {

	const query = 'SELECT * FROM produtos';

	db.query(query, (err,data) => {

		if (err)
			return res.json(err);
		 
		return res.status(200).json(data.rows);
	});
};
