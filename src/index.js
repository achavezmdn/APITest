//import app from './app.js'
import express from 'express';
import proveedorRoutes from './routes/proveedor.routes.js'

const app = express();

app.use(express.json());
app.use(proveedorRoutes);

app.listen(3000)

console.log('servidor iniciado 2...')