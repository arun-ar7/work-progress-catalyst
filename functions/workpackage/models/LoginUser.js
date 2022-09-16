const express = require("express");
const router = express.Router();
const joi = require("joi");

function validateUser(user) {
  const schema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().required(),
  });
  const result = schema.validate(user);
  return result;
}

module.exports.LoginValidate = validateUser;
