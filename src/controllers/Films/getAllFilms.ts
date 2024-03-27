import { Request, Response } from 'express';
import fetchAndSaveFilms from '../../helpers/fetchAndSaveFilms';
import Film from '../../models/Films';

export const getAllFilms = async (req: Request, res: Response) => {
	try {
		const count = await Film.countDocuments(); // Cuenta la cantidad de películas en la base de datos
		if (count === 0) {
			// Si no hay películas en la base de datos, se obtienen de SWAPI y se guardan
			await fetchAndSaveFilms();
		}
		// Una vez asegurado que la base de datos tiene los datos, los devuelve
		const films = await Film.find({});
		res.json(films);
	} catch (error) {
		console.error('Error al obtener o guardar las películas:', error);
		res.status(500).json({ message: 'Error al procesar tu solicitud' });
	}
};
