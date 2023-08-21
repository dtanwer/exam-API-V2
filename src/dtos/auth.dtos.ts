import {IsString,IsEmail,MaxLength,IsNotEmpty,Matches} from 'class-validator'

export class SignUpDtos{
    @IsString()
    @IsNotEmpty()
    name:string;
    @IsEmail()
    email:string;
    @IsString()
    @MaxLength(8)
    password:string;

}
export class LoginDtos{
    @IsEmail()
    email:string;
    @IsString()
    password:string;
}