import { Request, Response } from 'express';
import fetchAndSavePlanets from '../../helpers/fetchAndSavePlanets';
import Planet from '../../models/Planets';

export const getAllPlanets = async (req: Request, res: Response) => {
	try {
		const count = await Planet.countDocuments(); // Cuenta la cantidad de planetas en la base de datos
		if (count === 0) {
			// Si no hay planetas en la base de datos, se obtienen de SWAPI y se guardan
			await fetchAndSavePlanets();
		}
		// Una vez asegurado que la base de datos tiene los datos, los devuelve
		const Planets = await Planet.find({});
		res.json(Planets);
	} catch (error) {
		console.error('Error al obtener o guardar las planetas:', error);
		res.status(500).json({ message: 'Error al procesar tu solicitud' });
	}
};
