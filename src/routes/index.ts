import { Router } from 'express';
import { clients } from './Clients';
const router = Router();

router.use(clients);

export default router;
