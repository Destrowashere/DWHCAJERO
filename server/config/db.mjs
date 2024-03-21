/* eslint-disable prettier/prettier */
import mysql from 'mysql';


const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'market',
});
db.connect((error) => {
    if (error) {
      console.error('Error al conectar a la base de datos:', error);
      return;
    }
    console.log('Conexión exitosa a la base de datos');
  });
 export default db;
