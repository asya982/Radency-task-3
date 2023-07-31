import {
  IsNotEmpty,
  IsString,
  Max,
  Min,
  IsNumber
} from 'class-validator';

export class CreateNoteDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  content: string;

  @IsNotEmpty()
  @Max(2)
  @Min(0)
  @IsNumber()
  category: number;

}
