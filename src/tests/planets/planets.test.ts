import request from 'supertest';
import { closeServer } from '../../app/app';
import app from '../../app/app';

describe('GET /planets', () => {
	it('should return all planets', async () => {
		const response = await request(app).get('/planets');

		expect(response.status).toBe(200);
		expect(response.body.length).toBeGreaterThan(0);
	});
});

describe('GET /planets/:id', () => {
	it('should return the correct starship when a valid id is provided', async () => {
		const response = await request(app).get(`/planets/1`);

		expect(response.status).toBe(200);
		expect(response.body).toEqual(
			expect.objectContaining({
				_id: '1',
				name: 'Tatooine',
				rotation_period: '23',
				orbital_period: '304',
				diameter: '10465',
				climate: 'arid',
				gravity: '1 standard',
				terrain: 'desert',
				surface_water: '1',
				population: '200000',
				residents: ['1', '2', '4', '6', '7', '8', '9', '11', '43', '62'],
				films: [
					'https://swapi.dev/api/films/1/',
					'https://swapi.dev/api/films/3/',
					'https://swapi.dev/api/films/4/',
					'https://swapi.dev/api/films/5/',
					'https://swapi.dev/api/films/6/'
				],
				created: expect.anything(),
				edited: expect.anything(),
				url: 'https://swapi.dev/api/planets/1/',
				__v: expect.anything()
			})
		);
	});

	it('should return 404 if the provided id does not exist', async () => {
		const response = await request(app).get(`/planets/123`);

		expect(response.status).toBe(404);
		expect(response.body).toEqual({ error: 'planeta no encontrado' });
	});
});

afterAll(() => {
	// Cerrar la conexión después de las pruebas
	closeServer();
});
