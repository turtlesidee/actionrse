import Joi = require("@hapi/joi");
import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { MongoDbConfigService } from "./config.service";
import configuration from "./configuration";

@Module({
    imports: [
    ConfigModule.forRoot({
      load: [configuration],
      validationSchema: Joi.object({
        MONGODB_URL: Joi.string(),
        MONGODB_PASSWORD: Joi.string(),
        MONGODB_USERNAME: Joi.string(),
        MONGODB_DATABASE: Joi.string(),
      }),
    }),
  ],
  providers: [ConfigService, MongoDbConfigService],
  exports: [ConfigService, MongoDbConfigService],
})
export class MongoDbConfigModule {}
