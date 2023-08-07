import { Module } from '@nestjs/common';
import { NotesController } from '../routes/notes.controller';
import { NotesService } from '../service/notes.service';
import { DatabaseModule } from './database.module';
import { notessProviders } from 'src/bd/note.providers';

@Module({
  // imports: [DatabaseModule],
  controllers: [NotesController],
  providers: [NotesService, ...notessProviders]
})
export class NotesModule {}
