import Joi from "joi";
export const singupValidator = Joi.object({
  userName: Joi.string().required().min(6).max(255).message({
    "string.empty": "userName không được để trống!",
    "any.required": "userName là bắt buộc!",
    "string.min": "userName phải có ít nhất {#limit} ký tự",
    "string.max": "userName phải có ít nhất {#limit + 1} ký tự ",
  }),
  email: Joi.string().required().email().message({
    "string.empty": "Email không được để trống!",
    "any.required": "Email là bắt buộc!",
    "string.email": "Email không đúng định dạng",
  }),
  password: Joi.string().required().min(6).max(255).message({
    "string.empty": "password không được để trống!",
    "any.required": "password là bắt buộc!",
    "string.min": "password phải có ít nhất {#limit} ký tự",
    "string.max": "password phải có ít nhất {#limit + 1} ký tự ",
  }),
  // confirmPassword: Joi.string().required().min(6).max(255).message({
  //   "string.empty": "confirmPassword không được để trống!",
  //   "any.required": "confirmPassword là bắt buộc!",
  //   "string.min": "confirmPassword phải có ít nhất {#limit} ký tự",
  //   "string.max": "confirmPassword phải có ít nhất {#limit + 1} ký tự ",
  //   "any.only": "confirmPassword không khớp với password",
  // }),
  role:Joi.string()
});


export const singinValidator = Joi.object({
  email: Joi.string().required().email().message({
    "string.empty": "Email không được để trống!",
    "any.required": "Email là bắt buộc!",
    "string.email": "Email không đúng định dạng",
  }),
  password: Joi.string().required().min(6).max(255).message({
    "string.empty": "password không được để trống!",
    "any.required": "password là bắt buộc!",
    "string.min": "password phải có ít nhất {#limit} ký tự",
    "string.max": "password phải có ít nhất {#limit + 1} ký tự ",
  }),
});
