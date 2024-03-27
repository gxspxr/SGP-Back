import axios from 'axios';
import Planet from '../models/Planets';
import { getIdFromUrl } from './getIdFromUrl';

// Función para obtener los planetas de SWAPI y guardarlos en la base de datos
export async function fetchAndSavePlanets(pageUrl = 'https://swapi.dev/api/planets/') {
	let url = pageUrl;
	do {
		const response = await axios.get(url);
		const planets = response.data.results;
		for (const planet of planets) {
			// Verifica si el planeta ya existe en la base de datos para evitar duplicados
			const id = getIdFromUrl(planet.url);
			const exists = await Planet.findOne({ _id: id });
			if (!exists) {
				const residents = planet.residents.map((residentUrl: string) => getIdFromUrl(residentUrl));

				const newPlanet = new Planet({
					_id: id,
					name: planet.name,
					rotation_period: planet.rotation_period,
					orbital_period: planet.orbital_period,
					diameter: planet.diameter,
					climate: planet.climate,
					gravity: planet.gravity,
					residents,
					terrain: planet.terrain,
					surface_water: planet.surface_water,
					population: planet.population,
					films: planet.films,
					created: planet.created,
					edited: planet.edited,
					url: planet.url
				});

				await newPlanet.save();
			}
		}
		url = response.data.next; // Mover a la siguiente página si existe
	} while (url); // Continuar hasta que no haya más páginas
	console.log('Planets fetched and saved successfully.');
}

export default fetchAndSavePlanets;
