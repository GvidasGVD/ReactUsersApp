import * as yup from "yup";
import moment from "moment";
export const userSchema = yup.object().shape({
  name: yup
    .string()
    .min(2, "Must be at least 2 digits")
    .max(20, "Must be max 20 digits")
    .required(),
  surname: yup
    .string()
    .min(2, "Must be at least 2 digits")
    .max(20, "Must be max 20 digits")
    .required(),
  birth_date: yup
    .string()
    .test("DOB", "wrong DOB, at least 1 year", (value) => {
      return moment().diff(moment(value), "years") >= 1;
    })
    .required(),
  email: yup.string().required().email("Wrong email formating"),
  password: yup
    .string()
    .min(4, "Must be at least 4 digits")
    .max(10, "Must be max 10 digits")
    .required(),
  phone: yup
    .string()
    .required()
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(5, "Must be at least 5 digits")
    .max(11, "Must be max 11 digits"),
  identity: yup
    .string()
    .required()
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(2, "Must be at least 2 digits")
    .max(5, "Must be max 5 digits"),
  passport_number: yup
    .string()
    .required()
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(5, "Must be at least 5 digits")
    .max(11, "Must be max 11 digits"),
});
