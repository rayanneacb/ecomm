import { Model, DataTypes } from 'sequelize';
import client from '../../repositories/databaseClient.js';
//export { default as produtos } from '';
  export class Produtos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Produtos.init({
    name: DataTypes.STRING,
    value: DataTypes.DECIMAL,
    quantity: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    category: DataTypes.STRING,
    iD: DataTypes.STRING
  }, 
  { sequelize: client, modelName: 'Produtos'}
  );