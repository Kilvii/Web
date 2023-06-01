import { Controller, Get, Param } from "@nestjs/common";
import { ThemeService } from "src/Service/Theme.service";


@Controller('/theme')
export class ThemeController{
    constructor(private themeService:ThemeService){}

    @Get('/byId/:Id')
    public getById(@Param('Id') Id){
        return this.themeService.getById(Id);
    }

    @Get('/all')
    public getAll(){
        return this.themeService.getAll();
    }
}