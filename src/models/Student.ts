import mongoose, { Document, Schema } from 'mongoose';

interface Student extends Document {
  name: string;
  age: number;
}

const studentSchema = new Schema<Student>({
  name: { type: String, required: true },
  age: { type: Number, required: true },
});

const Student = mongoose.model<Student>('Student', studentSchema);
export default Student;
