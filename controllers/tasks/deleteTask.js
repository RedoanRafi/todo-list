import Task from '../../models/taskModel.js';

const deleteTask = async (req, res) => {
	try {
		const task = await Task.findByIdAndDelete(req.params.id);
		res.status(200).json({
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

export default deleteTask;
