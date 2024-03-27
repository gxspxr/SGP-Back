import request from 'supertest';
import { closeServer } from '../../app/app';
import app from '../../app/app';

describe('GET /starships', () => {
	it('should return all starships', async () => {
		const response = await request(app).get('/starships');

		expect(response.status).toBe(200);
		expect(response.body.length).toBeGreaterThan(0);
	});
});

describe('GET /starships/:id', () => {
	it('should return the correct starship when a valid id is provided', async () => {
		const response = await request(app).get(`/starships/2`);

		expect(response.status).toBe(200);
		expect(response.body).toEqual(
			expect.objectContaining({
				_id: '2',
				name: 'CR90 corvette',
				model: 'CR90 corvette',
				manufacturer: 'Corellian Engineering Corporation',
				cost_in_credits: '3500000',
				length: '150',
				max_atmosphering_speed: '950',
				crew: '30-165',
				passengers: '600',
				cargo_capacity: '3000000',
				consumables: '1 year',
				hyperdrive_rating: '2.0',
				MGLT: '60',
				starship_class: 'corvette',
				pilots: [],
				films: ['https://swapi.dev/api/films/1/', 'https://swapi.dev/api/films/3/', 'https://swapi.dev/api/films/6/'],
				created: expect.anything(),
				edited: expect.anything(),
				url: 'https://swapi.dev/api/starships/2/',
				__v: expect.anything()
			})
		);
	});

	it('should return 404 if the provided id does not exist', async () => {
		const response = await request(app).get(`/starships/123`);

		expect(response.status).toBe(404);
		expect(response.body).toEqual({ error: 'starship no encontrada' });
	});
});

afterAll(() => {
	// Cerrar la conexión después de las pruebas
	closeServer();
});
