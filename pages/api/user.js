import dbConnect from '../../utils/dbConnect';
import { Users } from '../../models';

export default async function handler(req, res) {
	const { method } = req;
	await dbConnect();
	switch (method) {
		case 'GET':
			try {
				console.log(req.query);
				/* find specific data in our database */
				const users = await Users.find(req.query);
				if (users.length == 1) {
					res.status(200).json({ success: true, data: users[0] });
				} else {
					res.status(201).json({ success: false, data: 'username or password in incorrect' });
				}
			} catch (error) {
				res.status(400).json({ success: false });
			}
			break;
		case 'POST':
			try {
				// check for existing username
				const tempUsers = await Users.find({ username: req.body.username });
				if (tempUsers.length == 0) {
					/* create a new model in the database */
					const user = await Users.create(req.body);
					res.status(201).json({ success: true, data: user });
				} else {
					res.status(201).json({ success: false, data: 'username already exists' });
				}
			} catch (error) {
				res.status(400).json({ success: false });
			}
			break;
		default:
			res.status(400).json({ success: false });
			break;
	}
}
