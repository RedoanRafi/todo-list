import Task from '../../models/taskModel.js';

const checkTask = async (req, res, next) => {
	try {
		const task = await Task.findById(req.params.id);
		if (!task) {
			return res.status(404).json({
				status: 'failed',
				message: 'Product not found',
			});
		}
		next();
	} catch (error) {
		res.status(500).json({
			status: 'failed',
			message: error.message,
		});
	}
};

export default checkTask;
