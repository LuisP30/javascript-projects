import { use } from "react";
import User from "../models/User";

class UserController{
  async create(req, res){
    try {
      const newUser = await User.create(req.body);
      return res.status(201).json(newUser);
      const { id, nome, email } = newUser;

    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message)
      });
    }
  };

  async index(req, res){
    try{
      const users = await User.findAll({ attributes: ['id', 'email', 'nome'] });
      return res.json(users);
    } catch(e){
      return res.json(null);
    }
  };

  async show(req, res){
    try{
      const user = await User.findByPk(req.userId);
      const { id, email, nome } = user;
      return res.json({id, nome, email});
    } catch(e){
      return res.json(null);
    }
  };

  async update(req, res){
    try{
      const user = await User.findByPk(req.userId);

      if(!user){
        return res.status(404).json({
          errors: ['Usuário não encontrado']
        })
      };

      const newUser = await user.update(req.body);
      const { id, nome, email } = newUser;
      return res.json({id, nome, email});

    } catch(e){
      return res.status(400).json({
        errors: e.errors.map((err) => err.message)
      });
    }
  };

async delete(req, res){
    try{
      const user = await User.findByPk(req.userId);

      if(!user){
        return res.status(404).json({
          errors: ['Usuário não encontrado']
        })
      };

      await user.destroy();
      return res.status(200).json({succes:'removido com sucesso'})

    } catch(e){
      return res.status(400).json({
        errors: e.errors.map((err) => err.message)
      });
    }
  }
}

export default new UserController();
