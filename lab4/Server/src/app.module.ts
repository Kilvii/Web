import { Module } from '@nestjs/common';
import { ProdcutController } from './Controller/Product.controller';
import { ThemeController } from './Controller/Theme.controller';
import { ProductService } from './Service/Product.service';
import { ThemeService } from './Service/Theme.service';

@Module({
  imports: [],
  controllers: [ProdcutController,ThemeController],
  providers: [ProductService,ThemeService],
})
export class AppModule {}
