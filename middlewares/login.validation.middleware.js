export function loginValidator(req, res, next) {
    // check if the "user" collection is present in the request body
    if (req.body) {
      let { username, password} = req.body;
  
    if (!username) {
      res.send("Username is required");
      return
    }
    if (!password) {
      res.send("password is required");
      return
    }
      
}
    next()
}