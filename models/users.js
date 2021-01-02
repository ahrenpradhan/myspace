import mongoose from 'mongoose';

const UsersSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true,
		maxlength: 24,
	},
	password: {
		type: String,
		required: true,
		maxlength: 24,
	}
});

export default mongoose.models.users || mongoose.model('users', UsersSchema);
