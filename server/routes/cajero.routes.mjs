/* eslint-disable prettier/prettier */
import express from 'express';
import getCajeros, { RegistrarCjero, RegistrarVenta } from '../controller/cajero.functions.mjs';
const router = express.Router();
router.get('/', (req, res) => {
    res.send('¡Hola mundo desde Express!');
  });
router.get('/cajero',getCajeros);
router.post('/cajero',RegistrarCjero);
router.post('/ventas',RegistrarVenta);

export default router;
