import { Router } from 'express';
import { getAllPlanets } from '../../controllers/Planets/getAllPlanets';
import { getPlanetById } from '../../controllers/Planets/getPlanetsById';
const router = Router();

router.get('/', getAllPlanets);
router.get('/:id', getPlanetById);

export const planets = Router();

planets.use('/planets', router);
