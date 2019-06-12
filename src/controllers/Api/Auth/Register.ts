import User from "../../../models/User";

class Register {
  public static perform(req, res): any {
    const _email = req.body.email;
    const _password = req.body.password;

    const user = new User({
      email: _email,
      password: _password
    });

    user.save(err => {
      if (err) {
        return res.json({
          error: err
        });
      }

      return res.json({
        message: ["You have been successfully registered with us!"]
      });
    });
  }
}

export default Register;
