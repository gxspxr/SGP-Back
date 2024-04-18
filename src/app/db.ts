import mongoose from 'mongoose';
async function connectDB() {
	const db = mongoose.connection;

	try {
		mongoose.connect('mongodb+srv://gassern1602:NtSOPiz9U3MpSgqa@cluster0.owdhaiy.mongodb.net/');
		db.once('open', () => {
			console.log('🟢 Database successfully connected 🚀');
		});
	} catch (error) {
		db.on('error', console.error.bind(console, '❌ MongoDB connection error:'));
	}
}

export default connectDB;
