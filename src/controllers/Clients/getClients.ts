import { Request, Response } from 'express';
import { HttpStatusCode } from 'axios';
import Client from '../../models/People';

export const getAllClients = async (req: Request, res: Response) => {
	try {
		// Busca todos los clientes en la base de datos
		const clients = await Client.find();

		// Si no se encontraron clientes, devuelve un mensaje
		if (!clients || clients.length === 0) {
			return res.status(HttpStatusCode.NotFound).json({ message: 'No clients found' });
		}

		// Devuelve todos los clientes encontrados
		res.status(HttpStatusCode.Ok).json({ clients });
	} catch (error) {
		console.error('Error when getting clients:', error);
		res.status(HttpStatusCode.InternalServerError).json({ error: 'Error getting clients.' });
	}
};
