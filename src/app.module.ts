import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { DemoModule } from './modules/demo/demo.module';
import { DemoCategoryModule } from './modules/demo-category/demo-category.module';
import { DemoItemModule } from './modules/demo-item/demo-item.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      autoLoadModels: true, // models will be loaded automatically
      synchronize: true, // automatically loaded models will be synchronized

      sync: {
        alter: true, // alter the tables based on schema
      },

      dialect: 'mysql',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE_NAME,
    }),
    DemoModule,
    DemoCategoryModule,
    DemoItemModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
