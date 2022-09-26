import { IsNotEmpty, IsNotEmptyObject, IsString, ValidateNested } from 'class-validator';
import { Referent } from './referent.dto';
import { Type } from 'class-transformer';

export class CompanyDto {
  
  @IsString()
  @IsNotEmpty()
  name: string

  @ValidateNested()
  @Type(() => Referent)
  referent: Referent
}

