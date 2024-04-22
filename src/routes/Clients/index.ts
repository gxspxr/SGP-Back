import { updateClient } from './../../controllers/Clients/editClients';
import { Router } from 'express';
import { createClient } from '../../controllers/Clients/createClients';
import { getAllClients } from '../../controllers/Clients/getClients';
import { getClientById } from '../../controllers/Clients/getClientsById';
import { getClientStatus } from '../../controllers/Clients/checkClientAvailability';
import { deleteClient } from '../../controllers/Clients/deleteClient';
const router = Router();

router.post('/', createClient);
router.get('/', getAllClients);
router.get('/:id', getClientById);
router.put('/:id', updateClient);
router.get('/status/:id', getClientStatus);
router.delete('/:id', deleteClient);
export const clients = Router();

clients.use('/clients', router);
