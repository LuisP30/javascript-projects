import Aluno from "../models/Aluno";
import Foto from "../models/Foto";

class AlunoController{
  async index(req, res){
    const alunos = await Aluno.findAll({
      attributes: ['id', 'nome', 'sobrenome', 'email', 'idade'],
      order: [['id', 'DESC'], [Foto, 'id', 'DESC']],
      include: {
        model: Foto,
        attributes: ['filename']
      },
    });
    res.status(200).json(alunos);
  }

  async store(req, res){
    try{
      const aluno = await Aluno.create(req.body)
      return res.status(201).json(aluno)
    }catch(e){
      return res.status(400).json({
        errors: e.errors.map(err => err.message)
      })
    }
  }

  async show(req, res){
    try{
      const { id } = req.params;

      if(!id){
        return res.status(400).json({
          errors: ['Faltando ID']
        })
      }

      const aluno = await Aluno.findByPk(id, {
      attributes: ['id', 'nome', 'sobrenome', 'email', 'idade'],
      order: [['id', 'DESC'], [Foto, 'id', 'DESC']],
      include: {
        model: Foto,
        attributes: ['filename']
      },
    })

      if(!aluno){
        return res.status(404).json({
          errors: ['Aluno não encontrado']
        })
      }

      return res.json(aluno)

    }catch(e){
      return res.status(400).json({
        errors: e.errors.map(err => err.message)
      })
    }

  }

  async delete(req, res){
    try{
      const { id } = req.params;

      if(!id){
        return res.status(400).json({
          errors: ['Faltando ID']
        })
      }

      const aluno = await Aluno.findByPk(id)

      if(!aluno){
        return res.status(404).json({
          errors: ['Aluno não encontrado']
        })
      }
      await aluno.destroy()
      return res.json({ success: 'Aluno removido com sucesso' })

    }catch(e){
      return res.status(400).json({
        errors: e.errors.map(err => err.message)
      })
    }

  }

  async update(req, res){
    try{
      const { id } = req.params;

      if(!id){
        return res.status(400).json({
          errors: ['Faltando ID']
        })
      }

      const aluno = await Aluno.findByPk(id)

      if(!aluno){
        return res.status(404).json({
          errors: ['Aluno não encontrado']
        })
      }
      const alunoAtualizado = await aluno.update(req.body)
      return res.status(200).json(alunoAtualizado)

    }catch(e){
      return res.status(400).json({
        errors: e.errors.map(err => err.message)
      })
    }
  }
}

export default new AlunoController();
