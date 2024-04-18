import { Request, Response } from 'express';
import { HttpStatusCode } from 'axios';
import Client from '../../models/People';
import { IClient } from '../../types/IClient';

export const updateClient = async (req: Request, res: Response) => {
	try {
		// Obtén el ID del cliente de los parámetros de la solicitud
		const clientId = req.params.id;

		// Obtén los datos actualizados del cliente del cuerpo de la solicitud
		const updatedClientData = req.body as IClient;

		// Busca el cliente por su ID en la base de datos
		const client = await Client.findById(clientId);

		// Si no se encuentra el cliente, devuelve un mensaje
		if (!client) {
			return res.status(HttpStatusCode.NotFound).json({ message: 'Client not found' });
		}

		// Actualiza los campos del cliente con los datos proporcionados
		client.set(updatedClientData);

		// Guarda los cambios en la base de datos
		await client.save();

		// Devuelve el cliente actualizado
		res.status(HttpStatusCode.Ok).json({ success: true, message: 'Client updated successfully', client });
	} catch (error) {
		console.error('Error when updating client:', error);
		res.status(HttpStatusCode.InternalServerError).json({ error: 'Error updating client.' });
	}
};
