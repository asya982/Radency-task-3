import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table
export class Note extends Model {
  @Column({
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @Column
  name: string;

  @Column
  created: Date;

  @Column
  category: number;

  @Column
  content: string;

  @Column({ type: DataType.ARRAY(DataType.DATE) })
  dates: Array<Date>;

  @Column
  isActive: boolean;
}
