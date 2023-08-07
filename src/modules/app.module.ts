import { Module } from '@nestjs/common';
import { NotesModule } from './notes.module';
import { ConfigModule } from '@nestjs/config';
import { Note } from 'src/bd/note.entity';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [
    NotesModule,
    ConfigModule.forRoot({ envFilePath: '.env' }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [Note],
      autoLoadModels: true,
    }),
  ],
})
export class AppModule {}
