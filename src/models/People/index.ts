import mongoose, { Schema } from 'mongoose';
import { IClient } from '../../types/IClient';

const clientSchema: Schema = new Schema<IClient>({
	name: { type: String, required: true },
	projectName: { type: String, required: true },
	status: { type: String, required: true },
	cost: { type: Number, required: true },
	paymentType: { type: String, required: true },
	nextPayment: { type: String, required: true }
});

const Client = mongoose.model<IClient>('Client', clientSchema);

export default Client;
