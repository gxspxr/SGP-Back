import fs from 'fs';
import YAML from 'yaml';
import swaggerUi from 'swagger-ui-express';
import { Router } from 'express';

const router = Router();

// Lee el archivo YAML de la documentación de Swagger y lo convierte en un objeto
const swaggerDocument = YAML.parse(fs.readFileSync('./swagger.yaml', 'utf8'));

// Define un nuevo enrutador para la documentación de Swagger
export const swaggerRouter = Router();

// Define la ruta para servir la documentación de Swagger utilizando swagger-ui
swaggerRouter.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

export default router;
