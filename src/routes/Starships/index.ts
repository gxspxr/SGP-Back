import { Router } from 'express';
import { getAllStarhsips } from '../../controllers/Starships/getAllStarships';
import { getStarshipById } from '../../controllers/Starships/getStarshipById';
const router = Router();

router.get('/', getAllStarhsips);
router.get('/:id', getStarshipById);

export const starships = Router();

starships.use('/starships', router);
