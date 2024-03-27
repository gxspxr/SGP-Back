import { Router } from 'express';
import { getAllFilms } from '../../controllers/Films/getAllFilms';
import { getFilmById } from '../../controllers/Films/getFilmById';
const router = Router();

router.get('/', getAllFilms);
router.get('/:id', getFilmById);

export const films = Router();

films.use('/films', router);
