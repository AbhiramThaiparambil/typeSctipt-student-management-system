import mongoose, { Document, Schema } from 'mongoose';

interface Assignment extends Document {
  title: string;
  dueDate: Date;
  
}

const assignmentSchema = new Schema<Assignment>({
  title: { type: String, required: true },
  dueDate: { type: Date, required: true },
});

const Assignment = mongoose.model<Assignment>('Assignment', assignmentSchema);
export default Assignment;
