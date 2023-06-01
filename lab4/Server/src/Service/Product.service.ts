import { Injectable } from "@nestjs/common";
import { Prodcut } from "src/Entity/Product.entity";


Injectable()
export class ProductService {

    protected Products: Array<Prodcut> = [
        {
            Id: 1,
            ThemeId: 1,
            Title: 'Постер `Cyberpunk`',
            Description: 'Постер для интерьера на стену (30х40 см). Киберпанк 2077 - Джони Сильверхенд (Cyberpunk 2077 - Johny Silverhand).Отличное украшение любого интерьера. Высокое качество печати. Порадуйте себя и удивите гостей! Или подарите близким - постеры надежно упакованы в тубус.Поставляются скрученными в плотном картонном тубусе. Рамы в комплект не входят.',
            Image: 'https://ir.ozone.ru/s3/multimedia-n/wc750/6265744391.jpg',
            Tag: 'Интерьер'
        },
        {
            Id: 2,
            ThemeId: 1,
            Title: 'Кружка `Cyberpunk`',
            Description: 'Керамическая кружка с полноцветным глянцевым изображением, объемом 350 мл. Кружка сделана на превосходном уровне в HD качестве.',
            Image: 'https://ir.ozone.ru/s3/multimedia-1/wc750/6066513889.jpg',
            Tag: 'Посуда'
        },
        {
            Id: 3,
            ThemeId: 1,
            Title: 'Шлем `Cyberpunk`',
            Description: 'Крутая маска отличается от всех других аксессуаров для косплея. Полна механического и технологического смысла.',
            Image: 'https://ir.ozone.ru/s3/multimedia-7/wc750/6647154055.jpg',
            Tag: 'Одежда'
        },
        {
            Id: 4,
            ThemeId: 2,
            Title: 'Керамический кубок Верховного Повелителя Вольнира',
            Description: 'Кубок выполнен из керамики высокого качества и покрыт безопасной для здоровья глазурью. С легкостью выдержит горячие или холодные напитки.',
            Image: 'https://ir.ozone.ru/s3/multimedia-v/wc750/6158425987.jpg',
            Tag: 'Посуда'
        },
        {
            Id: 5,
            ThemeId: 2,
            Title: 'Графический роман "Dark Souls"',
            Description: 'Собрание графических романов по мотивам легендарной компьютерной игры Dark Souls! В книгу вошла вся коллекция из 4 частей',
            Image: 'https://ir.ozone.ru/s3/multimedia-7/wc700/6365545159.jpg',
            Tag: 'Книга'
        },
        {
            Id: 6,
            ThemeId: 3,
            Title:'Артбук `Persona 5`',
            Image:'https://ir.ozone.ru/s3/multimedia-1/wc700/6600939193.jpg',
            Description:'К двадцатилетию выхода PERSONA5 Atlus и SEGA выпустили небольшой эксклюзивный артбук в Японии.',
            Tag:"Книга",
        },
        {
            Id:7,
            ThemeId:3,
            Title:'Журнальный стол Rivalli',
            Image:'https://ir.ozone.ru/s3/multimedia-d/wc700/6651080797.jpg',
            Description:'Стильный и современный дизайн столиков серии Матисс-М сочетается с простотой сборки и эксплуатации, что делает их популярными в нашем ассортименте.',
            Tag:'Интерьер'
        },
        {
            Id:8,
            ThemeId:3,
            Title:'Фигурка `Amamiya Ren` из `Persona 5`',
            Image:'https://ir.ozone.ru/s3/multimedia-8/wc700/6556670456.jpg',
            Description:"Фигурка крута ыыы",
            Tag:"Фигурка",
        },
    ];

    public getById(Id): Prodcut {
        return this.Products.find(product => product.Id == Id);
    }

    public getByThemeId(themeId): Array<Prodcut> {
        return this.Products.filter(products => products.ThemeId == themeId)
    }

    public getAll(): Array<Prodcut> {
        return this.Products;
    }

}