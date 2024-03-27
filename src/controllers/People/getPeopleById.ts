import { Request, Response } from 'express';
import People from '../../models/People';

export const getPeopleById = async (req: Request, res: Response) => {
	try {
		const id = req.params.id;
		const person = await People.findById(id);

		if (!person) {
			return res.status(404).json({ message: 'Personaje no encontrado' });
		}

		res.json(person);
	} catch (error) {
		console.error('Error al buscar el personaje:', error);
		res.status(500).json({ message: 'Error al buscar el personaje' });
	}
};
