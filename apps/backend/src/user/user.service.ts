import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import axios from 'axios';
import { ConfigService } from '@nestjs/config';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(private configService: ConfigService) {}

  async create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
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

  async update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  async remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
