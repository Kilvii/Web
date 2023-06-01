import { Controller, Get, Param } from "@nestjs/common";
import { ProductService } from "src/Service/Product.service";


@Controller('/product')
export class ProdcutController{
    constructor(private productService:ProductService){}

    @Get('/byId/:Id')
    public getById(@Param('Id') Id){
        return this.productService.getById(Id);
    }

    @Get('/byThemeId/:themeId')
    public getByThemeId(@Param('themeId') themeId){
        return this.productService.getByThemeId(themeId);
    }

    @Get('/all')
    public getAll(){
        return this.productService.getAll();
    }
}