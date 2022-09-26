import { ConfigService } from "@nestjs/config";


export class MongoDbConfigService {
  constructor(private configService: ConfigService) {}

  get url(): string {
    return this.configService.get<string>('mongo.url')
  }

  get username(): string {
    return this.configService.get<string>('mongo.username')
  }

  get password(): string {
    return this.configService.get<string>('mongo.username')
  }

  get database(): string {
    return this.configService.getOrThrow<string>('mongo.database')
  }

}
