import mongoose, { Schema } from 'mongoose';
import { IPlanet } from '../../types/IPlanets';

const PlanetSchema: Schema = new Schema<IPlanet>({
	_id: { type: String, required: true },
	name: { type: String, required: true },
	rotation_period: { type: String, required: true },
	orbital_period: { type: String, required: true },
	diameter: { type: String, required: true },
	climate: { type: String, required: true },
	gravity: { type: String, required: true },
	terrain: { type: String, required: true },
	surface_water: { type: String, required: true },
	population: { type: String, required: true },
	residents: { type: [String], required: true },
	films: { type: [String], required: true },
	created: { type: Date, required: true },
	edited: { type: Date, required: true },
	url: { type: String, required: true }
});

const Planet = mongoose.model<IPlanet>('Planet', PlanetSchema);

export default Planet;
