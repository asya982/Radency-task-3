import  sequelize  from "./database.config"
import { Model, DataTypes } from 'sequelize';

class Note extends Model {
    public id!: number;
    public name!: string;
    public created!: Date;
    public category!: number;
    public content!: string | null;
    public dates!: Date[] | null;
    public isActive!: boolean;
  
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
  }
  
  Note.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      created: {
        type: DataTypes.DATEONLY, 
      },
      category: {
        type: DataTypes.INTEGER,
      },
      content: {
        type: DataTypes.TEXT,
      },
      dates: {
        type: DataTypes.ARRAY(DataTypes.DATEONLY), 
      },
      isActive: {
        type: DataTypes.BOOLEAN,
      },
    },
    {
      sequelize,
      modelName: 'Note',
    }
  );
  
  export default Note;