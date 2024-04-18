import { updateClient } from './../../controllers/Clients/editClients';
import { Router } from 'express';
import { createClient } from '../../controllers/Clients/createClients';
import { getAllClients } from '../../controllers/Clients/getClients';
import { getClientById } from '../../controllers/Clients/getClientsById';
import { getClientStatus } from '../../controllers/Clients/checkClientAvailability';
const router = Router();

router.post('/', createClient);
router.get('/', getAllClients);
router.get('/:id', getClientById);
router.put('/:id', updateClient);
router.get('/status/:id', getClientStatus);
export const clients = Router();

clients.use('/clients', router);
