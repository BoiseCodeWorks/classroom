import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Classroom = new Schema(
  {
    title: { type: String, required: true },
    roomNumber: { type: String, required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Classroom;
