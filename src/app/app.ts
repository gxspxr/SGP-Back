import express from 'express';
import connectDB from './db';
import router from '../routes';
import cors from 'cors'; // Importa el middleware cors
import '../cron/index';

const app = express();
const PORT = process.env.PORT || 3000;

// Aplica el middleware cors para permitir solicitudes desde cualquier origen
app.use(cors());

app.use(express.json());
app.use(router);
connectDB();

const server = app.listen(PORT, () => {
	console.log(`🟢 Server is running at port: ${PORT}`);
});

export const closeServer = () => {
	if (server) {
		server.close();
		console.log('Server closed');
	}
};

export default app;
