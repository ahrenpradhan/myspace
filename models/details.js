import mongoose from 'mongoose';

const DetailsSchema = new mongoose.Schema({
	firstname: {
		type: String,
		required: true,
		maxlength: 20,
	},
	lastname: {
		type: String,
		required: true,
		maxlength: 20,
	},
	email: {
		type: String,
		required: true,
		maxlength: 20,
	},
	age: {
		type: Number,
	},
	description: {
		type: String,
	}
});

export default mongoose.models.details || mongoose.model('details', DetailsSchema);
