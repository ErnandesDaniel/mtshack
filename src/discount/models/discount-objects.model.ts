import {Column, DataType, Model, Table } from "sequelize-typescript";
import { DataTypes } from "sequelize";

@Table({tableName: 'discount-objects'})
export class discountObject extends Model {

  //Ссылка на страницу товара
  @Column({ type: DataType.TEXT})
  detailedURL:string;

  //Ссылка на картинку товара
  @Column({ type: DataType.TEXT})
  imgURL:string;

  //Старая цена товара без скидки
  @Column({ type: DataType.DOUBLE})
  oldPrice:number;
  
  //Новая цена товара со скидкой
  @Column({ type: DataType.DOUBLE})
  newPrice:number;

}