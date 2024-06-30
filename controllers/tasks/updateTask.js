import Task from '../../models/taskModel.js';

const updateTask = async (req, res) => {
	try {
		const task = req.body;
		const updatedTask = await Task.findByIdAndUpdate(
			req.params.id,
			task,
			{
				new: true,
				runValidators: true,
			}
		);

		res.status(200).json({
			status: 'success',
			doc: updatedTask,
		});
	} catch (error) {
		res.status(500).json({
			status: 'failed',
			message: error.message,
		});
	}
};

export default updateTask;
