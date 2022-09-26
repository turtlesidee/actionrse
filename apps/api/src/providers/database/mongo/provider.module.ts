import { Module } from "@nestjs/common";
import { TypeOrmModule } from '@nestjs/typeorm';
import { MongoDbConfigModule } from "apps/api/src/config/database/mongo/config.module";
import { MongoDbConfigService } from "apps/api/src/config/database/mongo/config.service";

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [MongoDbConfigModule],
      useFactory: (c: MongoDbConfigService) => {
          return {
          type:'mongodb',
          url: `mongodb+srv://${c.username}:${c.password}@${c.url}/?retryWrites=true&w=majority&database=${c.database}`,
          useNewUrlParser: true,
          useUnifiedTopology: true,
          logging: true,
          entities: []
        }
      },
      inject: [MongoDbConfigService]
    }),
  ]
})
export class MongoDatabaseProviderModule {}
