import pkg from 'pg';
const { Pool } = pkg;
 

export const db = new Pool({
  user: 'cedup',
  password: 'cedup',
  host: 'postgres-react-joao',
  port: 5432, // default Postgres port
  database: 'cedup'
});