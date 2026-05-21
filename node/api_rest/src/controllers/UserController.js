import { use } from "react";
import User from "../models/User";

class UserController{
  async create(req, res){
    try {
      const newUser = await User.create(req.body);
      return res.status(201).json(newUser);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message)
      });
    }
  };

  async index(req, res){
    try{
      const users = await User.findAll();
      return res.json(users);
    } catch(e){
      console.log(e)
      return res.json(null);
    }
  };

  async show(req, res){
    try{
      const user = await User.findByPk(req.params.id);
      return res.json(user);
    } catch(e){
      console.log(e)
      return res.json(null);
    }
  };

  async update(req, res){
    try{
      if(!req.params.id){
        return res.status(400).json({
          errors: ['ID não enviado']
        })
      }

      const user = await User.findByPk(req.params.id);

      if(!user){
        return res.status(404).json({
          errors: ['Usuário não encontrado']
        })
      };

      const newUser = await user.update(req.body);

      return res.json(user);

    } catch(e){
      return res.status(400).json({
        errors: e.errors.map((err) => err.message)
      });
    }
  };

async delete(req, res){
    try{
      if(!req.params.id){
        return res.status(400).json({
          errors: ['ID não enviado']
        })
      }

      const user = await User.findByPk(req.params.id);

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
