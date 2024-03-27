import { Router } from 'express';
import { getAllPeople } from '../../controllers/People/getAllPeople';
import { getPeopleById } from '../../controllers/People/getPeopleById';

const router = Router();

router.get('/', getAllPeople);
router.get('/:id', getPeopleById);

export const people = Router();

people.use('/people', router);
