// src/app-config/app-config.controller.ts
import { Controller, Get, Put, Body } from '@nestjs/common';
import { AppConfigService } from './app-config.service';
import { AppConfig } from './schemas/app-config.schema';

@Controller('/app-config')
export class AppConfigController {
  constructor(private readonly configService: AppConfigService) {}

  @Get()
  async getConfig(): Promise<AppConfig> {
    return this.configService.getConfig();
  }

  @Put()
  async updateConfig(@Body() data: Partial<AppConfig>): Promise<AppConfig> {
    return this.configService.updateConfig(data);
  }
}
