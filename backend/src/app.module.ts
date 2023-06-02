import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Contact } from './entities/contact.entity';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContactService } from './contact/contact.service';
import { ContactsController } from './contacts/contacts.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      database: 'nestngdb',
      username: 'root',
      password: 'root',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Contact]),
  ],
  controllers: [AppController, ContactsController],
  providers: [AppService, ContactService],
})
export class AppModule { }