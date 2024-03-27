import axios from 'axios';
import People from '../models/People';
import { getIdFromUrl } from './getIdFromUrl';

async function fetchAndSavePeople(pageUrl = 'https://swapi.dev/api/people/') {
	let url = pageUrl;
	do {
		const response = await axios.get(url);
		const people = response.data.results;
		for (const person of people) {
			// Obtiene el ID del personaje desde la URL de SWAPI
			const personId = getIdFromUrl(person.url);
			// Verifica si el personaje ya existe en la base de datos para evitar duplicados
			const exists = await People.findOne({ _id: personId });
			if (!exists) {
				// Si el personaje no existe, crea uno nuevo con el ID de SWAPI
				const newPerson = new People({
					_id: personId,
					name: person.name,
					height: person.height,
					mass: person.mass,
					hair_color: person.hair_color,
					skin_color: person.skin_color,
					eye_color: person.eye_color,
					birth_year: person.birth_year,
					gender: person.gender,
					homeworld: person.homeworld,
					films: person.films,
					starships: person.starships
				});
				await newPerson.save();
			}
		}
		url = response.data.next; // Pasar a la siguiente página si existe
	} while (url); // Continuar hasta que no haya más páginas
	console.log('People fetched and saved successfully.');
}

export default fetchAndSavePeople;
