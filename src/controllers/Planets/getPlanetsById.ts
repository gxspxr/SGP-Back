import Planet from '../../models/Planets';
import { Request, Response } from 'express';
import mongoose from 'mongoose';

export async function getPlanetById(req: Request, res: Response) {
	const PlanetId = req.params.id;

	try {
		const Planets = await Planet.findById(PlanetId);
		if (!Planets) {
			return res.status(404).json({ error: 'planeta no encontrado' });
		}
		return res.status(200).json(Planets);
	} catch (error) {
		console.error('Error al buscar el planeta por ID:', error);
		return res.status(500).json({ error: 'Error interno del servidor' });
	}
}
