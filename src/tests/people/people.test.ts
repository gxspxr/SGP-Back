import request from 'supertest';
import { closeServer } from '../../app/app';
import app from '../../app/app';

describe('GET /people', () => {
	it('should return all people', async () => {
		const response = await request(app).get('/people');

		expect(response.status).toBe(200);
		expect(response.body.length).toBeGreaterThan(0);
	});
});

describe('GET /people/:id', () => {
	it('should return the correct person when a valid id is provided', async () => {
		const response = await request(app).get(`/people/1`);

		expect(response.status).toBe(200);
		expect(response.body).toEqual(
			expect.objectContaining({
				_id: '1',
				name: 'Luke Skywalker',
				height: '172',
				mass: '77',
				hair_color: 'blond',
				skin_color: 'fair',
				eye_color: 'blue',
				birth_year: '19BBY',
				gender: 'male',
				homeworld: 'https://swapi.dev/api/planets/1/',
				films: ['https://swapi.dev/api/films/1/', 'https://swapi.dev/api/films/2/', 'https://swapi.dev/api/films/3/', 'https://swapi.dev/api/films/6/'],
				starships: ['https://swapi.dev/api/starships/12/', 'https://swapi.dev/api/starships/22/'],
				created: expect.anything(), // Acepta cualquier valor
				edited: expect.anything(),
				__v: expect.anything()
			})
		);
	});

	it('should return 404 if the provided id does not exist', async () => {
		const response = await request(app).get(`/people/84`);

		expect(response.status).toBe(404);
		expect(response.body).toEqual({ message: 'Personaje no encontrado' });
	});
});

afterAll(() => {
	// Cerrar la conexión después de las pruebas
	closeServer();
});
