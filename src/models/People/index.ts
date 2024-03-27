import mongoose, { Schema } from 'mongoose';
import { IPeople } from '../../types/IPeople';

const peopleSchema: Schema = new Schema<IPeople>({
	_id: { type: String, required: true },
	name: { type: String, required: true },
	height: { type: String },
	mass: { type: String },
	hair_color: { type: String },
	skin_color: { type: String },
	eye_color: { type: String },
	birth_year: { type: String },
	gender: { type: String },
	homeworld: { type: String },
	films: [{ type: String }],
	starships: [{ type: String }],
	created: { type: Date, default: Date.now },
	edited: { type: Date, default: Date.now }
});

const People = mongoose.model<IPeople>('People', peopleSchema);

export default People;
