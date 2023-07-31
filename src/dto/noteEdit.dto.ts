import {
  IsString,
  Max,
  Min,
  IsNumber,
  IsBoolean,
  IsOptional,
} from 'class-validator';

export class EditNoteDto {

  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  content?: string;

  @IsOptional()
  @Max(2)
  @Min(0)
  @IsNumber()
  category?: number;

  @IsOptional()
  @IsBoolean()
  isActive?: boolean;

  @IsOptional()
  @IsString({each: true})
  dates?: string[]
}
