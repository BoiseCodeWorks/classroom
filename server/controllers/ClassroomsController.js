import express from "express";
import classroomsService from "../services/ClassroomsService";
import studentsService from "../services/StudentsService";
import submissionsService from "../services/SubmissionsService";
import assignmentsService from "../services/AssignmentsService";

export default class ClassroomsController {
  constructor() {
    this.router = express
      .Router()
      //NOTE  each route gets registered as a .get, .post, .put, or .delete, the first parameter of each method is a string to be concatinated onto the base url registered with the route in main. The second parameter is the method that will be run when this route is hit.
      .get("", this.getAll)
      .get("/:id", this.getById)
      .get("/:id/students", this.getStudentsByClassroomId)
      .get("/:id/assignments", this.getAssignmentsByClassroomId)
      .get("/:id/submissions", this.getSubmissionsByClassroomId)
      .post("", this.create)
      .put("/:id", this.edit)
      .delete("/:id", this.delete);
  }

  async getAll(req, res, next) {
    try {
      let data = await classroomsService.getAll();
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async getById(req, res, next) {
    try {
      let data = await classroomsService.getById(req.params.id);
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async getStudentsByClassroomId(req, res, next) {
    try {
      let data = await studentsService.getStudentsByClassroomId(req.params.id);
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }

  async getSubmissionsByClassroomId(req, res, next) {
    try {
      let data = await submissionsService.getSubmissionsByClassroomId(
        req.params.id
      );
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async getAssignmentsByClassroomId(req, res, next) {
    try {
      let data = await assignmentsService.getAssignmentsByClassroomId(
        req.params.id
      );
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async create(req, res, next) {
    try {
      let data = await classroomsService.create(req.body);
      return res.status(201).send(data);
    } catch (error) {
      next(error);
    }
  }
  async edit(req, res, next) {
    try {
      let data = await classroomsService.edit(req.params.id, req.body);
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async delete(req, res, next) {
    try {
      await classroomsService.delete(req.params.id);
      return res.send("Successfully Deleted");
    } catch (error) {
      next(error);
    }
  }
}
