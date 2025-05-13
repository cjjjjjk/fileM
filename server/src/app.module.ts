import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DocumentsModule } from './documents/documents.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AppConfigModule } from './app-config/app-config.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/filem-db'),
    DocumentsModule,
    AppConfigModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
