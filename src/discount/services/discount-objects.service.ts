import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/sequelize";
import { discountObject } from "../models/discount-objects.model";

@Injectable()
export class discountObjectsService {

  constructor(
    @InjectModel(discountObject) private discountModel: typeof discountObject,
  ){}

  async getAll(){
  
    //Получаем все объекты
    let discountsArray=await this.discountModel.findAll();

    //Формируем массив объектов для его отображения на стороне клиента
    let formattedDiscountsArray=discountsArray.map((discount)=>{

      return{

        id:discount.id,
		
		oldPrice:discount.oldPrice,
		
		newPrice:discount.newPrice,
		
		imgURL:discount.imgURL,
		
		detailedURL:discount.detailedURL,

      };

    });

    return {

        formattedDiscountsArray,

    };

  }

}
