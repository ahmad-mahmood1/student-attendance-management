const Joi = require("joi");

const createCourseSchema = Joi.object({
  name: Joi.string().min(4).max(50).required(),
  description: Joi.string().min(5).max(100).required(),
});

const updateCourseSchmea = Joi.object({
  name: Joi.string().min(4).max(50),
  description: Joi.string().min(5).max(100),
});

module.exports = {
  createCourseValidation: (req, res, next) => {
    let schemaKeys = Object.keys(createCourseSchema.describe().keys);
    const isValid = Object.keys(req.body).every((key) => {
      return schemaKeys.includes(key);
    });
    if (!isValid) {
      return res.status(400).json({ error: "Invalid request body" });
    }
    const { error } = createCourseSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }
    next();
  },
  updateCourseValidaiton: (req, res, next) => {
    let schemaKeys = Object.keys(createCourseSchema.describe().keys);
    const isValid = Object.keys(req.body).every((key) => {
      return schemaKeys.includes(key);
    });
    if (!isValid) {
      return res.status(400).json({ error: "Invalid request body" });
    }
    const { error } = updateCourseSchmea.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }
    next();
  },
};
