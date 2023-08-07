import { Module } from '@nestjs/common';
import { databaseProviders } from '../bd/database.providers';

@Module({
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class DatabaseModule {}