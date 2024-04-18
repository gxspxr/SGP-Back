import { Request, Response } from 'express';
import { HttpStatusCode } from 'axios';
import Client from '../../models/People';

export const getClientById = async (req: Request, res: Response) => {
	try {
		// Obtén el ID del cliente de los parámetros de la solicitud
		const id = req.params.id;

		// Busca el cliente por su ID en la base de datos
		const client = await Client.findById(id);

		// Si no se encuentra el cliente, devuelve un mensaje
		if (!client) {
			return res.status(HttpStatusCode.NotFound).json({ message: 'Client not found' });
		}

		// Devuelve el cliente encontrado
		res.status(HttpStatusCode.Ok).json({ success: true, client });
	} catch (error) {
		console.error('Error when getting client by ID:', error);
		res.status(HttpStatusCode.InternalServerError).json({ error: 'Error getting client by ID.' });
	}
};
