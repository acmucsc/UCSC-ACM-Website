
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  major: {
    type: String,
    default: '',
  },
  graduationYear: {
    type: String,
    default: '',
  },
  role: {
    type: String,
    enum: ['member', 'admin'],
    default: 'member',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model('User', userSchema);
