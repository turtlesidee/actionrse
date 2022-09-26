import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class Referent {

  @IsString()
  @IsNotEmpty()
  firstname: string

  @IsString()
  @IsNotEmpty()
  lastname: string

  @IsEmail()
  @IsNotEmpty()
  email: string
}
