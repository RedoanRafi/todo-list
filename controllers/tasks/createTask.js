import Task from '../../models/taskModel.js';

const createTask = async (req, res) => {
	try {
		const task = await Task.create(req.body);
		res.status(201).json({
			status: 'success',
			doc: task,
		});
	} catch (error) {
		res.status(500).json({
			status: 'failed',
			message: error.message,
		});
	}
};

export default createTask;
