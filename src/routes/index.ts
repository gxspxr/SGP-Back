import { Router } from 'express';
import { people } from './People';
import { films } from './Films';
import { starships } from './Starships';
import { planets } from './Planets';
import { swaggerRouter } from './Swagger';
const router = Router();

// Agrupa todas las rutas
router.use(people);
router.use(films);
router.use(starships);
router.use(planets);
router.use(swaggerRouter);

export default router;
