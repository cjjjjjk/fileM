// src/app-config/schemas/app-config.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ collection: 'app_config', timestamps: true })
export class AppConfig extends Document {
  @Prop({ default: true })
  iframe_protection_enabled: boolean;
}

export const AppConfigSchema = SchemaFactory.createForClass(AppConfig);
