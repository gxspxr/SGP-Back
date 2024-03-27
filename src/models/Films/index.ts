import mongoose, { Schema } from 'mongoose';
import { IFilms } from '../../types/IFilms';

const FilmSchema: Schema = new Schema<IFilms>({
	_id: { type: String, required: true },
	title: { type: String, required: true },
	episode_id: { type: Number, required: true },
	opening_crawl: { type: String, required: true },
	director: { type: String, required: true },
	producer: { type: String, required: true },
	release_date: { type: Date, required: true },
	characters: [{ type: String }],
	planets: [{ type: String }],
	created: { type: Date, default: Date.now },
	edited: { type: Date, default: Date.now },
	url: { type: String, required: true }
});

const Film = mongoose.model<IFilms>('Film', FilmSchema);

export default Film;
