const Joi = require("joi");

const createAttendanceSchema = Joi.object({
  studentId: Joi.number().integer().required(),
  courseId: Joi.number().integer().required(),
  date: Joi.string().isoDate().required(),
  attended: Joi.boolean().required(),
}).options({ convert: false });

const updateAttendanceSchema = Joi.object({
  studentId: Joi.number().integer(),
  courseId: Joi.number().integer(),
  date: Joi.string().isoDate(),
  attended: Joi.boolean(),
}).options({ convert: false });

let schemaKeys = Object.keys(createAttendanceSchema.describe().keys);
const isValid = (params) =>
  Object.keys(params).every((key) => {
    return schemaKeys.includes(key);
  });

module.exports = {
  createAttendanceValidation: (req, res, next) => {
    if (!isValid(req.body)) {
      return res.status(400).json({ error: "Invalid request body" });
    }
    const { error } = createAttendanceSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }
    next();
  },

  updateAttendanceValidation: (req, res, next) => {
    if (!isValid(req.body)) {
      return res.status(400).json({ error: "Invalid request body" });
    }
    const { error } = updateAttendanceSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }
    next();
  },
};
