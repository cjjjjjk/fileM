// src/app-config/app-config.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { AppConfig } from './schemas/app-config.schema';
import { Model } from 'mongoose';

@Injectable()
export class AppConfigService {
  constructor(
    @InjectModel(AppConfig.name) private readonly configModel: Model<AppConfig>,
  ) {}

  async getConfig(): Promise<AppConfig> {
    let config = await this.configModel.findOne();
    if (!config) {
      config = new this.configModel();
      await config.save();
    }
    return config;
  }

  async updateConfig(data: Partial<AppConfig>): Promise<AppConfig> {
    const config = await this.getConfig();
    Object.assign(config, data);
    return config.save();
  }
}
