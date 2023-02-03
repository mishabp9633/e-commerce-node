import { isValidMobileNumber ,isValidEmail} from "../utils/util.js";



export function userMiddleware(req, res, next) {
  // check if the "user" collection is present in the request body
  if (req.body) {
    let { username, password, name, mobileNo, email,confirmPassword } = req.body;

  if (!username) {
    res.send("Username is required");
    return
  }
  if (!password) {
    res.send("password is required");
    return
  }
  if (!confirmPassword) {
    res.send("confirmPassword is required");
    return
  }
  if (!name) {
    res.send("name is required");
    return
  }

  if (!mobileNo) {
    res.send("mobileNo is required");
    return
  }
  if (!isValidMobileNumber(mobileNo)) {
    res.send("your mobile number not match required format");
    return
  }
  if (!email) {
    res.send("email is required");
    return
  }

  if (!isValidEmail(email)) {
    res.send("your email address not match required format");
    return
  }

  }
  next();
}
