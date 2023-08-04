import { Module } from '@nestjs/common';
import { NotesModule } from './notes.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [NotesModule, ConfigModule.forRoot({ isGlobal: true })],
})
export class AppModule {}
