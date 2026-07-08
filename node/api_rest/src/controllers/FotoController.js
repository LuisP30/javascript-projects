import multer from "multer";
import multerConfig from "../config/multer";

const upload = multer(multerConfig).single('image')

class FotoController{
  async store(req, res){
    return upload(req, res, (error) => {
      if(error){
        return  res.status(401).json({
          errors: [error.code]
        })
      }

      if(!req.file) return res.status(400).json({
        errors: ['É necessário enviar um arquivo de imagem. (JPG, JPEG ou PNG)']
      })

      return res.json(req.file)

    })
  }
}

export default new FotoController();
