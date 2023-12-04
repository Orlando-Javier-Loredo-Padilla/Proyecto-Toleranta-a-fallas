// server.js para el servicio "pie"

const express = require('express');
const convertirDePie = require('./pie'); // Ajusta la ruta según tu estructura

const app = express();
const port = process.env.PORT || 3001; // Puedes ajustar el puerto según tus necesidades

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // Permitir solicitudes desde cualquier origen
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(express.json());

app.get('/convertir', (req, res) => {
  const cantidad = parseFloat(req.query.cantidad);
  const unitTo = req.query.unitTo;

  if (isNaN(cantidad) || !unitTo) {
    return res.status(400).json({ error: 'Parámetros inválidos' });
  }

  const resultado = convertirDePie(cantidad, unitTo);

  if (isNaN(resultado)) {
    return res.status(400).json({ error: 'Unidad de destino no válida' });
  }

  res.json({ resultado });
});

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
