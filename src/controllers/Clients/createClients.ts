import { Request, Response } from 'express';
import { HttpStatusCode } from 'axios';
import Client from '../../models/People';
import { IClient } from '../../types/IClient';

export const createClient = async (req: Request, res: Response) => {
	try {
		// Obtén los datos del cliente del cuerpo de la solicitud
		const { name, projectName, status, cost, paymentType, nextPayment } = req.body as IClient;

		// Crea un nuevo cliente con los datos proporcionados
		const newClient = new Client({
			name,
			projectName,
			status,
			cost,
			paymentType,
			nextPayment
		});

		await newClient.save();

		res.status(HttpStatusCode.Created).json({ success: true, message: 'Client created successfully', newClient });
	} catch (error) {
		console.error('Error when creating client:', error);
		res.status(HttpStatusCode.InternalServerError).json({ error: 'Error creating client.' });
	}
};
