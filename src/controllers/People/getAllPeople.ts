import { Request, Response } from 'express';
import People from '../../models/People';
import fetchAndSavePeople from '../../helpers/fetchAndSavePeople';

// Controlador para obtener todas las personas
export const getAllPeople = async (req: Request, res: Response) => {
	try {
		const count = await People.countDocuments(); //countDocuments cuenta la cantidad de documentos que hay en la coleccion de la DB
		if (count === 0) {
			// Si no hay personas en la base de datos, obténlas de SWAPI y guárdalas
			await fetchAndSavePeople();
		}
		// Una vez asegurado que la base de datos tiene los datos, devuélvelos
		const people = await People.find({});
		res.json(people);
	} catch (error) {
		console.error('Error al obtener o guardar los personajes:', error);
		res.status(500).json({ message: 'Error al procesar tu solicitud' });
	}
};
