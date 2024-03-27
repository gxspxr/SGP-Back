import cron from 'node-cron';
import fetchAndSaveFilms from '../helpers/fetchAndSaveFilms';
import fetchAndSavePeople from '../helpers/fetchAndSavePeople';
import fetchAndSavePlanets from '../helpers/fetchAndSavePlanets';
import fetchAndSaveStarships from '../helpers/fetchAndSaveStarships';

const isJest = process.env.JEST_WORKER_ID !== undefined;

// Ejecutar las tareas cron solo si no se está ejecutando Jest
if (!isJest) {
	// Tarea cron para actualizar Starships a medianoche y mediodia
	cron.schedule('0 0,12 * * *', async () => {
		try {
			console.log('Ejecutando la tarea cron para actualizar Starships...');
			await fetchAndSaveStarships();
			console.log('Tarea cron completada');
		} catch (error) {
			console.error('Error al ejecutar la tarea cron:', error);
		}
	});

	// Tarea cron para actualizar Planets a medianoche y mediodia
	cron.schedule('0 0,12 * * *', async () => {
		try {
			console.log('Ejecutando la tarea cron para actualizar planets...');
			await fetchAndSavePlanets();
			console.log('Tarea cron completada');
		} catch (error) {
			console.error('Error al ejecutar la tarea cron:', error);
		}
	});

	// Tarea cron para actualizar People a medianoche y mediodia
	cron.schedule('0 0,12 * * *', async () => {
		try {
			console.log('Ejecutando la tarea cron para actualizar people...');
			await fetchAndSavePeople();
			console.log('Tarea cron completada');
		} catch (error) {
			console.error('Error al ejecutar la tarea cron:', error);
		}
	});

	// Tarea cron para actualizar Films a medianoche y mediodia
	cron.schedule('0 0,12 * * *', async () => {
		try {
			console.log('Ejecutando la tarea cron para actualizar las películas...');
			await fetchAndSaveFilms();
			console.log('Tarea cron completada');
		} catch (error) {
			console.error('Error al ejecutar la tarea cron:', error);
		}
	});
}
