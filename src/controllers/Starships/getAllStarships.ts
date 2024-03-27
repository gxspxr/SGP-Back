import { Request, Response } from 'express';
import fetchAndSaveStarships from '../../helpers/fetchAndSaveStarships';
import Starship from '../../models/Starships';

export const getAllStarhsips = async (req: Request, res: Response) => {
	try {
		const count = await Starship.countDocuments(); // Cuenta la cantidad de películas en la base de datos
		if (count === 0) {
			// Si no hay películas en la base de datos, se obtienen de SWAPI y se guardan
			await fetchAndSaveStarships();
		}
		// Una vez asegurado que la base de datos tiene los datos, los devuelve
		const Starships = await Starship.find({});
		res.json(Starships);
	} catch (error) {
		console.error('Error al obtener o guardar las películas:', error);
		res.status(500).json({ message: 'Error al procesar tu solicitud' });
	}
};
