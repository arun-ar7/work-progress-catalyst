const express = require("express");
const router = express.Router();
const joi = require("joi");
// router.post("/", (req, res) => {
// console.log(req.body);

function validateUser(user) {
  const schema = joi.object({
    firstname: joi.string().min(3).max(30).required(),
    lastname: joi.string().min(1).max(30).required(),
    email: joi.string().email().required(),
    password: joi.string().required(),
  });
  const result = schema.validate(user);
  // if (result.error) {
  //   res.send("There is an error in validation");
  // }
  return result;
}
// });

// // module.exports.User = router;
// module.exports.validate = validateUser();

module.exports.validate = validateUser;
