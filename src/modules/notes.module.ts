import { Module } from '@nestjs/common';
import { NotesController } from '../routes/notes.controller';
import { NotesService } from '../service/notes.service';
import { notessProviders } from 'src/bd/note.providers';

@Module({
  controllers: [NotesController],
  providers: [NotesService, ...notessProviders]
})
export class NotesModule {}
