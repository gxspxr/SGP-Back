import mongoose from 'mongoose';
async function connectDB() {
	const db = mongoose.connection;

	try {
		mongoose.connect('mongodb+srv://sernagas1234:rBjHc0hFYcwfdQlI@cluster0.4sz8s5p.mongodb.net/');
		db.once('open', () => {
			console.log('🟢 Database successfully connected 🚀');
		});
	} catch (error) {
		db.on('error', console.error.bind(console, '❌ MongoDB connection error:'));
	}
}

export default connectDB;
