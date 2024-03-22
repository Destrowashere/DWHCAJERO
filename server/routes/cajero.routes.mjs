/* eslint-disable prettier/prettier */
import express from 'express';
import getCajeros, { RegistrarCjero, RegistrarVenta, mostrarVenta , getVentasDia, getVentasMes, getVentasPorCajero} from '../controller/cajero.functions.mjs';
const router = express.Router();
router.get('/', (req, res) => {
    res.send('¡Hola mundo desde Express!');
  });
router.get('/cajero',getCajeros);
router.post('/cajero',RegistrarCjero);
router.post('/ventas',RegistrarVenta);
router.get('/ventas',mostrarVenta);
router.get('/ventas/dia', getVentasDia); 
router.get('/ventas/mes', getVentasMes);
router.get('/ventas/cajero',getVentasPorCajero);
export default router;
