import { registerAs } from '@nestjs/config';

export default registerAs('mongo', () => ({
  url: process.env.MONGODB_URL,
  username: process.env.MONGODB_USERNAME,
  password: process.env.MONGODB_PASSWORD,
  databse: process.env.MONGODB_DATABASE
}))
