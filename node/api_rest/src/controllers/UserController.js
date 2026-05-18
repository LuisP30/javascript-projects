import User from "../models/User";

class UserController{
  async create(req, res){
    console.log(req.body)
    try {
      const newUser = await User.create(req.body)
      res.status(201).json(newUser);
    } catch (e) {
      res.status(400).json({
        errors: e.errors.map((err) => err.message)
      });
    }
  }
}

export default new UserController();
