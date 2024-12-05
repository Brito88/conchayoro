import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProductsModule } from './products/products.module';
import { AppController } from './app.controller';  // Adicione a importação do AppController
import { AppService } from './app.service';  // Adicione a importação do AppService

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'sqlite',
      omitNull: true,
      autoLoadModels: true,
      synchronize: true,
    }),
    ProductsModule,
  ],
  controllers: [AppController],  // Registre o AppController
  providers: [AppService],  // Registre o AppService
})
export class AppModule {}
