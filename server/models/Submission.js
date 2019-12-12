import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const Submission = new Schema(
  {
    url: { type: String, required: true },
    grade: { type: String, required: true, default: "ungraded" },
    classroomId: { type: ObjectId, ref: "Classroom", required: true },
    studentId: { type: ObjectId, ref: "Student", required: true },
    assignmentId: { type: ObjectId, ref: "Assignment", required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Submission;
