import dbConnect from '../../../utils/dbConnect';
import { Details } from '../../../models';

export default async function handler(req, res) {
	const { method } = req;
	await dbConnect();
	switch (method) {
		case 'GET':
			try {
				const details = await Details.find({}); /* find all the data in our database s*/
				res.status(200).json({ success: true, data: details });
			} catch (error) {
				res.status(400).json({ success: false });
			}
			break;
		case 'POST':
			try {
				const detail = await Details.create(req.body); /* create a new model in the database */
				res.status(201).json({ success: true, data: detail });
			} catch (error) {
				res.status(400).json({ success: false });
			}
			break;
		default:
			res.status(400).json({ success: false });
			break;
	}
}
