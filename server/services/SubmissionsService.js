import mongoose from "mongoose";
import Submission from "../models/Submission";
import ApiError from "../utils/ApiError";

const _repository = mongoose.model("Submission", Submission);

class SubmissionsService {
  async getAll() {
    return await _repository.find({});
  }
  async getById(id) {
    let data = await _repository.findById(id);
    if (!data) {
      throw new ApiError("Invalid ID", 400);
    }
    return data;
  }

  async getSubmissionsByClassroomId(classroomId) {
    return await _repository
      .find({ classroomId })
      .populate("studentId", "-name")
      .populate("classroomId", "title");
  }
  async create(rawData) {
    return await _repository.create(rawData);
  }
  async edit(id, update) {
    let data = await _repository.findOneAndUpdate({ _id: id }, update, {
      new: true
    });
    if (!data) {
      throw new ApiError("Invalid Update ID", 400);
    }
    return data;
  }
  async delete(id) {
    let data = await _repository.findOneAndRemove({ _id: id });
    if (!data) {
      throw new ApiError("Invalid ID", 400);
    }
  }
}

const submissionsService = new SubmissionsService();
export default submissionsService;
