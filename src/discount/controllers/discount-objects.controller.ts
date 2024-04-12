import {  Controller,Get} from "@nestjs/common";
import {discountObjectsService} from "../services/discount-objects.service";

@Controller('discounts')
export class discountObjectsController {

  constructor(private discountService: discountObjectsService) {}

  @Get()
  async getAll(){

    return await this.discountService.getAll();

  }

}
