// https://sequelize.org/docs/v6/core-concepts/model-basics/
import Sequelize, { DataTypes, Model } from "sequelize";
import bcrypt from "bcryptjs";

export default class User extends Model {
  static init(sequelize){
    super.init({
      nome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Nome deve ter entre 3 e 255 caracteres'
          }
        }
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
          msg: 'E-mail já está em uso'
        },
        validate: {
          isEmail: {
            msg: 'E-mail inválido'
          }
        }
      },
      password_hash: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      password: {
        type: Sequelize.VIRTUAL,
        defaultValue: '',
        validate: {
          len: {
            args: [6, 50],
            msg: 'A senha deve ter entre 6 e 50 caracteres'
          }
        }
      }
    }, {
      sequelize,
    })

    this.addHook('beforeSave', async user => {
      if(user.password){
        user.password_hash = await bcrypt.hash(user.password, 8);
        // 8 é a quantidade de vezes que a senha será criptografada
      }
    });

    return this;
  }
  passwordIsValid(password){
    return bcrypt.compare(password, this.password_hash)
  }
}
