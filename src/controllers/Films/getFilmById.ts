import Film from '../../models/Films';
import { Request, Response } from 'express';
import mongoose from 'mongoose';

export async function getFilmById(req: Request, res: Response) {
	const filmId = req.params.id;

	try {
		const film = await Film.findById(filmId);
		if (!film) {
			return res.status(404).json({ error: 'Película no encontrada' });
		}
		return res.status(200).json(film);
	} catch (error) {
		console.error('Error al buscar película por ID:', error);
		return res.status(500).json({ error: 'Error interno del servidor' });
	}
}
