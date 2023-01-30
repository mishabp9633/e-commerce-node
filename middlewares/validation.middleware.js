import { isValidMobileNumber ,isValidEmail} from "../utils/util.js";


export function validateMiddleware(req, res, next) {

    // check if the "user" collection is present in the request body
    if (req.body.user) {
      let { username, password, name, mobileNo, email,confirmPassword} = req.body.user;
  
      //check if all the fields are present and their values are correct
      if (!username) {
        res.send("Username is required");
        return
      }
      if (!password) {
        res.send("password is required");
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
      if (!confirmPassword) {
        res.send("confirmPassword is required");
        return
      }
    }
    // check if the "doctor" collection is present in the request body
    if (req.body.doctor) {
      let { isAccepted, department, timeStart, timeEnd, qualification, yearofExperience } = req.body.doctor;
  
      //check if all the fields are present and their values are correct
      if (!isAccepted) {
        res.send("isAccepted is required");
        return
      }
      if (!department) {
        res.send("department is required");
        return
      }
      if (!timeStart) {
        res.send("timeStart is required");
        return
      }
      if (!timeEnd) {
        res.send("timeEnd is required");
        return
      }
      if (!qualification) {
        res.send("qualification is required");
        return
      }
      if (!yearofExperience) {
        res.send("yearofExperience is required");
        return
      }
    }
    next();
  }


