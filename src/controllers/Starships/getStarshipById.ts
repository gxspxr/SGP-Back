import Starship from '../../models/Starships';
import { Request, Response } from 'express';
import mongoose from 'mongoose';

export async function getStarshipById(req: Request, res: Response) {
	const StarhsipId = req.params.id;
	
	try {
		const Starships = await Starship.findById(StarhsipId);
		if (!Starships) {
			return res.status(404).json({ error: 'starship no encontrada' });
		}
		return res.status(200).json(Starships);
	} catch (error) {
		console.error('Error al buscar película por ID:', error);
		return res.status(500).json({ error: 'Error interno del servidor' });
	}
}
