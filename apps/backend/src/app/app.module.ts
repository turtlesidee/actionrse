import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import environment from '../environments/environment';
import { UserModule } from '../user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Company } from '../companies/entities/company.entity';
import { CompaniesModule } from '../companies/companies.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [environment],
      isGlobal: true
    }),

    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => {
        const url = configService.get<string>('mongodb_url')
        const username = configService.get<string>('mongodb_username')
        const password = configService.get<string>('mongodb_password')
        const database = configService.get<string>('mongodb_database')
        return {
          type:'mongodb',
          url: `mongodb+srv://${username}:${password}@${url}/?retryWrites=true&w=majority&database=${database}`,
          useNewUrlParser: true,
          useUnifiedTopology: true,
          logging: true,
          entities: [Company]
        }
      },
      inject: [ConfigService]
    }),
    UserModule,
    CompaniesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
