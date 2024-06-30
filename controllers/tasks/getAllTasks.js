import Task from '../../models/taskModel.js';

const getAllTasks = async (req, res) => {
	try {
		const tasks = await Task.find();
		res.status(200).json({
			status: 'success',
			results: tasks.length,
			doc: tasks,
		});
	} catch (error) {
		res.status(500).json({
			status: 'failed',
			message: error.message,
		});
	}
};

export default getAllTasks;
