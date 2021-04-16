const yup = require("yup");

const registerSchema = yup.object({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().email().required(),
  userName: yup.string().required(),
  password: yup.string().min(6).required(),
  phoneNumber: yup.number(),
});

module.exports = registerSchema;
