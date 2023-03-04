const express = require("express");

const studentRoutes = require("./studentRoutes");
const courseRoutes = require("./courseRoutes");
const attendanceRoutes = require("./attendanceRoutes");

const appRouter = express.Router();

appRouter.use("/students", studentRoutes);

appRouter.use("/courses", courseRoutes);

appRouter.use("/attendance", attendanceRoutes);

module.exports = appRouter;
