/* eslint-disable prettier/prettier */
// server.mjs
import express from 'express';
import router from './routes/cajero.routes.mjs';
const app = express();
const port = 3500;

app.use(express.json());
app.use('/',router);

app.listen(port, () => {
    console.log(`Servidor en ejecución en http://localhost:${port}`);
  });

export default app;
