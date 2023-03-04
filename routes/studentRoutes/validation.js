const Joi = require("joi");

const createStudentSchema = Joi.object({
  name: Joi.string().min(4).max(50).required(),
  age: Joi.number().min(18).max(60).required(),
}).options({ convert: false });

const updateStudentSchema = Joi.object({
  name: Joi.string().min(4).max(50),
  age: Joi.number().min(18).max(60),
}).options({ convert: false });

module.exports = {
  validateStudentCreation: (req, res, next) => {
    let schemaKeys = Object.keys(createStudentSchema.describe().keys);
    const isValid = Object.keys(req.body).every((key) => {
      return schemaKeys.includes(key);
    });
    if (!isValid) {
      return res.status(400).json({ error: "Invalid request body" });
    }
    const { error } = createStudentSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }
    next();
  },
  validateStudentUpdation: (req, res, next) => {
    let schemaKeys = Object.keys(createStudentSchema.describe().keys);
    const isValid = Object.keys(req.body).every((key) => {
      return schemaKeys.includes(key);
    });
    if (!isValid) {
      return res.status(400).json({ error: "Invalid request body" });
    }
    const { error } = updateStudentSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }
    next();
  },
};
