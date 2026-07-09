import multer from "multer";
import multerConfig from "../config/multer";
import Foto from "../models/Foto";

const upload = multer(multerConfig).single('image')

class FotoController{
  store(req, res){
    return upload(req, res, async (error) => {
      if(error){
        return  res.status(401).json({
          errors: [error.code]
        })
      }

      if(!req.file) return res.status(400).json({
        errors: ['É necessário enviar um arquivo de imagem. (JPG, JPEG ou PNG)']
      })


      try {
        const { originalname, filename } = req.file
        const { aluno_id } = req.body
        const foto = await Foto.create({ originalname, filename, aluno_id })
        return res.json(foto)

      } catch (error) {
        return res.status(400).json({
          errors: ['Aluno não existe']
        })
      }


4
    })
  }
}

export default new FotoController();
