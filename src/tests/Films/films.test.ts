import request from 'supertest';
import { closeServer } from '../../app/app';
import app from '../../app/app';

describe('GET /films', () => {
	it('should return all films', async () => {
		const response = await request(app).get('/films');

		expect(response.status).toBe(200);
		expect(response.body.length).toBeGreaterThan(0);
	});
});

describe('GET /films/:id', () => {
	it('should return the correct film when a valid id is provided', async () => {
		const response = await request(app).get(`/films/1`);

		expect(response.status).toBe(200);
		expect(response.body).toEqual(
			expect.objectContaining({
				_id: '1',
				title: 'A New Hope',
				episode_id: 4,
				opening_crawl:
					"It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy....",
				director: 'George Lucas',
				producer: 'Gary Kurtz, Rick McCallum',
				release_date: '1977-05-25T00:00:00.000Z',
				characters: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '12', '13', '14', '15', '16', '18', '19', '81'],
				planets: ['https://swapi.dev/api/planets/1/', 'https://swapi.dev/api/planets/2/', 'https://swapi.dev/api/planets/3/'],
				created: expect.anything(),
				edited: expect.anything(),
				url: 'https://swapi.dev/api/films/1/',
				__v: expect.anything()
			})
		);
	});

	it('should return 404 if the provided id does not exist', async () => {
		const response = await request(app).get(`/films/123`);

		expect(response.status).toBe(404);
		expect(response.body).toEqual({ error: 'Película no encontrada' });
	});
});

afterAll(() => {
	// Cerrar la conexión después de las pruebas
	closeServer();
});
