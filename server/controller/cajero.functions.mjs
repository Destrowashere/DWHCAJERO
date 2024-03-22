import db from '../config/db.mjs';

export default function getCajeros(req, res) {
    db.query('SELECT * FROM cajero', (error, results) => {
        if (error) {
            console.error('Error al obtener productos:', error);
            res.status(500).json({ error: 'Error interno del servidor' });
        } else {
            res.json({ cajeros: results });
        }
    });
}

export function RegistrarCjero(req,res){
    const { name, carnet }  = req.body;
    db.query('INSERT INTO cajero (nombre,carnet) VALUES (?,?)',[name, carnet],(error,results)=>{
        if (error) {
            console.error('Error al insertar cajero:', error);
            res.status(500).json({ error: 'Error interno del servidor' });
        } else {
            res.json({ mensaje: 'Cajero insertado: ', id: results.insertId });
        }
    });
}

export function RegistrarVenta(req, res){
    const { cajero, cliente, valor, fecha } = req.body;
    const factura = Math.floor(10000 + Math.random() * 90000);
    db.query('INSERT INTO ventas(cajero,cliente, valor, fecha, factura) VALUES (?,?,?,?,?)',[cajero,cliente, valor, fecha, factura],(error,results)=>{
        if (error){
            console.log(`Error al registrar venta: ${error}`);
            res.status(500).json({error:error});
        } else {
            res.json({mensaje: 'Venta registrada'});
        }
    });
}

export function mostrarVenta(req,res){
    db.query('SELECT * FROM ventas', (error, results) => {
        if (error) {
            console.error('Error al obtener productos:', error);
            res.status(500).json({ error: 'Error interno del servidor' });
        } else {
            res.json({ ventas: results });
        }
    });
}
export function getVentasDia(req, res) {
    const fecha = req.query.fecha; 

    if (!fecha) {
        return res.status(400).json({ error: 'Se requiere el parámetro de fecha en la URL' });
    }

    // Verificar si la fecha tiene el formato correcto (YYYY-MM-DD)
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateRegex.test(fecha)) {
        return res.status(400).json({ error: 'Formato de fecha inválido. El formato debe ser YYYY-MM-DD' });
    }

    // Convertir la fecha a un objeto Date para poder utilizarla en la consulta
    const startDate = new Date(fecha);
    const endDate = new Date(fecha);
    endDate.setDate(endDate.getDate()+1); 
    db.query('SELECT * FROM ventas WHERE fecha BETWEEN ? AND ?', [startDate, endDate], (error, results) => {
        if (error) {
            console.error('Error al obtener ventas del día:', error);
            res.status(500).json({ error: 'Error interno del servidor' });
        } else {
            res.json({ ventas: results });
        }
    });
}

export function getVentasMes(req, res) {
    const mes = req.query.mes; 

    if (!mes) {
        return res.status(400).json({ error: 'Se requiere el parámetro de mes en la URL' });
    }

    const month = parseInt(mes, 10); 

    if (isNaN(month) || month < 1 || month > 12) {
        return res.status(400).json({ error: 'El valor del mes debe ser un número entero entre 1 y 12' });
    }

    const today = new Date();
    const startDate = new Date(today.getFullYear(), mes - 1, 1, 0, 0, 0); // Primer día del mes específico
    const endDate = new Date(today.getFullYear(), mes, 0, 23, 59, 59); // Último día del mes específico

    db.query('SELECT * FROM ventas WHERE fecha BETWEEN ? AND ?', [startDate, endDate], (error, results) => {
        if (error) {
            console.error('Error al obtener ventas del mes:', error);
            res.status(500).json({ error: 'Error interno del servidor' });
        } else {
            res.json({ ventas: results });
        }
    });
}

export function getVentasPorCajero(req, res) {
    const cajero = req.query.cajero;

    if (!cajero) {
        return res.status(400).json({ error: 'Se requiere el parámetro de cajero en la URL' });
    }

    db.query('SELECT * FROM ventas WHERE cajero = ?', cajero, (error, results) => {
        if (error) {
            console.error('Error al obtener ventas por cajero:', error);
            res.status(500).json({ error: 'Error interno del servidor' });
        } else {
            res.json({ ventas: results });
        }
    });
}

