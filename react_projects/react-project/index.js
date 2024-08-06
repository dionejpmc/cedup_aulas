import express from 'express';
import cors from "cors";

import userRoutes from "./src/backend/routes/users.js";
import productRoutes from "./src/backend/routes/products.js";


const PORT = 3000;

const HOST = '0.0.0.0';

const app = express();

app.use(cors());
app.use(express.json());

app.use("/", userRoutes)

/*
app.get('/', (req,res) => {
	res.send('Hello World! Eu sou o Joao Paulo!!!');
});


app.get('/', (req,res) => {
	res.send(''+
    '<table border="1">'+
    '<tr>'+
        '<td>Nome</td>'+
        '<td>Idade</td>'+
        '<td>Profissão</td>'+
    '</tr>'+
    '<tr>'+
        '<td>Ted</td>'+
        '<td>22</td>'+
        '<td>Estudante</td>'+
   ' </tr>'+
    '<tr>'+
        '<td>Ralf</td>'+ 
        '<td>26</td>'+
        '<td>Designer</td>'+
    '</tr>'+

    '</table>'+

		'');
});

*/



app.listen(PORT,HOST);

