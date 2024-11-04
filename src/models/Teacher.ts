import mongoose, { Document, Schema } from 'mongoose';

interface Teacher extends Document {
  name: string;
  age: number;
}

const teacherSchema = new Schema<Teacher>({
  name: { type: String, required: true },
  age: { type: Number, required: true },
});

const Teacher = mongoose.model<Teacher>('Teacher', teacherSchema);
export default Teacher;
