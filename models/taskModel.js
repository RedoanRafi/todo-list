import mongoose from 'mongoose';

const schema = mongoose.Schema({
  title: { type: String, required: [true, 'Title is required'] },
  description: { type: String, required: false },
  // price: { type: Number, required: [true, 'Price is required'] },
  // note: { type: String, required: false },
  // category: { type: String, required: false },
  // stock: { type: Number, required: false, default: 0 },
});

const Task = mongoose.model('Task', schema);

export default Task;
