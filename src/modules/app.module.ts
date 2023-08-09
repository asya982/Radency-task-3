import { Module } from '@nestjs/common';
import { NotesModule } from './notes.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Note } from 'src/bd/note.entity';
import { SequelizeModule } from '@nestjs/sequelize';
import configurations from 'src/configurations';

@Module({
  imports: [
    NotesModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configurations],
    }),
    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService) => ({
        dialect: 'postgres',
        host: configService.get('db_host'),
        port: configService.get('db_port'),
        username: configService.get('db_user'),
        password: configService.get('db_password'),
        database: configService.get('db_name'),
        synchronize:true,
        autoLoadModels:true,
        models:[Note]
      }),
    }),
  ],
})
export class AppModule {}
