import axios from 'axios';
import Film from '../models/Films';
import { getIdFromUrl } from './getIdFromUrl';

// Función para obtener las películas de SWAPI y guardarlas en la base de datos
export async function fetchAndSaveFilms(pageUrl = 'https://swapi.dev/api/films/') {
	let url = pageUrl;
	do {
		const response = await axios.get(url);
		const films = response.data.results;
		for (const film of films) {
			// Verifica si la película ya existe en la base de datos para evitar duplicados
			const id = getIdFromUrl(film.url);
			const exists = await Film.findOne({ _id: id });
			if (!exists) {
				const characters = film.characters.map((characterUrl: string) => getIdFromUrl(characterUrl));
				const newFilm = new Film({
					_id: id,
					title: film.title,
					episode_id: film.episode_id,
					opening_crawl: film.opening_crawl,
					director: film.director,
					producer: film.producer,
					release_date: film.release_date,
					characters,
					planets: film.planets,
					starships: film.starships,
					vehicles: film.vehicles,
					created: film.created,
					edited: film.edited,
					url: film.url
				});

				await newFilm.save();
			}
		}
		url = response.data.next; // Mover a la siguiente página si existe
	} while (url); // Continuar hasta que no haya más páginas
	console.log('Films fetched and saved successfully.');
}

export default fetchAndSaveFilms;
