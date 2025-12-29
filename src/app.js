import express from 'express';
import proveedorRoutes from './routes/proveedor.routes.js'

const app = express();

app.use(express.json());
app.use(proveedorRoutes);

export default app;