import mongoose from "mongoose";
import Assignment from "../models/Assignment";
import ApiError from "../utils/ApiError";

const _repository = mongoose.model("Assignment", Assignment);

class AssignmentsService {
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
  async getAssignmentsByClassroomId(classroomId) {
    return await _repository.find({ classroomId });
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

const assignmentsService = new AssignmentsService();
export default assignmentsService;
