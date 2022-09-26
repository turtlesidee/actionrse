import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import axios from 'axios';
import { ConfigService } from '@nestjs/config';
import { randomUUID } from 'crypto';

@Injectable()
export class UserService {
  constructor(private configService: ConfigService) {}

  async create(createUserDto: CreateUserDto) {
    try {
      const token =this.configService.get<string>('auth0_management_api_token')  
      const url = this.configService.get<string>('auth0_management_api_base_url')  

      const requestCreateUser = await axios.request({
        method: 'POST',
        url: `${url}/users`,
        headers: {
          authorization: `Bearer ${token}`
        },
        data: {
          email: createUserDto.email,
          verify_email: true,
          connection: 'Username-Password-Authentication',
          password: randomUUID(),
          app_metadata: {
            firstname: createUserDto.firstname,
            lastname: createUserDto.lastname
          }
        }
      })

      console.log(requestCreateUser.data)
      return 'User created'
    } catch (e) {
        console.log(e)
        throw new HttpException('Cannot create user', HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }

  async findAll() {
    try {
      const token =this.configService.get<string>('auth0_management_api_token')  
      const url = this.configService.get<string>('auth0_management_api_base_url')  

      const requestUsers = await axios.request({
        method: 'GET',
        url: `${url}/users`,
        headers: {
          authorization: `Bearer ${token}`
        }
        
      })

      const users = requestUsers.data;

      const usersFormatted = users.map(u => ({
        email: u.email,
        firstname: u.app_metadata.firstname,
        lastname: u.app_metadata.lastname,
      }));

      return usersFormatted;
    } catch (e) {
        throw new HttpException('Cannot list all users', HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }

  async findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  async remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
