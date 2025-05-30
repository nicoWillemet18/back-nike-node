import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import usuarioRoutes from './routes/usuarioRoutes';
import productoRoutes from './routes/productoRoutes';
import typeRoutes from './routes/typeRoutes';
import categoriaRoutes from './routes/categoriaRoutes';
import direccionRoutes from './routes/direccionRoutes';
import usuariosDireccionRoutes from './routes/usuariosDireccionRoutes';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (_, res) => {
  res.send('Servidor funcionando');
});

app.use('/usuarios', usuarioRoutes);
app.use('/productos', productoRoutes);
app.use('/types', typeRoutes);
app.use('/categorias', categoriaRoutes);
app.use('/direcciones', direccionRoutes);
app.use('/usuarios-direcciones', usuariosDireccionRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

