import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const Student = new Schema(
  {
    name: { type: String, required: true },
    classroomId: { type: ObjectId, ref: "Classroom", required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Student;
