import express from 'express';
import connectDB from './db';
import router from '../routes';
import cors from 'cors'; // Importa el middleware cors

const app = express();
const PORT = process.env.PORT || 3000;

// Aplica el middleware cors para permitir solicitudes desde cualquier origen
app.use(cors());

app.use(express.json());
app.use(router);
connectDB();

app.listen(PORT, () => {
	console.log(`🟢 Server is running at port: ${PORT}`);
});

export default app;
