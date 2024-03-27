import axios from 'axios';
import Starship from '../models/Starships';
import { IStarships } from '../types/IStarships';
import { getIdFromUrl } from './getIdFromUrl';

// Función para obtener las naves estelares de SWAPI y guardarlas en la base de datos
async function fetchAndSaveStarships(pageUrl = 'https://swapi.dev/api/starships/'): Promise<void> {
	let url = pageUrl;

	do {
		const response = await axios.get(url);
		const data = response.data;
		const starships: IStarships[] = data.results;

		for (const starshipData of starships) {
			// Verifica si la nave estelar ya existe en la base de datos para evitar duplicados
			const id = getIdFromUrl(starshipData.url);
			const exists = await Starship.findOne({ name: id });
			if (!exists) {
				const characters = starshipData.pilots.map((pilotUrl: string) => getIdFromUrl(pilotUrl)); // Obtiene los ID de los personajes para los pilotos
				const newStarship = new Starship({
					_id: id,
					name: starshipData.name,
					model: starshipData.model,
					manufacturer: starshipData.manufacturer,
					cost_in_credits: starshipData.cost_in_credits,
					length: starshipData.length,
					max_atmosphering_speed: starshipData.max_atmosphering_speed,
					crew: starshipData.crew,
					passengers: starshipData.passengers,
					cargo_capacity: starshipData.cargo_capacity,
					consumables: starshipData.consumables,
					hyperdrive_rating: starshipData.hyperdrive_rating,
					MGLT: starshipData.MGLT,
					starship_class: starshipData.starship_class,
					pilots: characters,
					films: starshipData.films,
					created: starshipData.created,
					edited: starshipData.edited,
					url: starshipData.url
				});

				await newStarship.save();
			}
		}
		url = data.next; // Mover a la siguiente página si existe
	} while (url); // Continuar hasta que no haya más páginas

	console.log('Starships fetched and saved successfully.');
}

export default fetchAndSaveStarships;
