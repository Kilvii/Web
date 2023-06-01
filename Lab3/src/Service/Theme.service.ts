import { Injectable } from "@nestjs/common";
import { Theme } from "src/Entity/Theme.entity";


Injectable()
export class ThemeService {

    protected Themes: Array<Theme> = [
        {
            Id:1,
            Title:'Cyberpunk'
        },
        {
            Id:2,
            Title:'Dark Souls'
        },
        {
            Id:3,
            Title:'Persona'
        },
    ];

    public getById(Id): Theme {
        return this.Themes.find(theme => theme.Id == Id);
    }

    public getAll(): Array<Theme> {
        return this.Themes;
    }

}