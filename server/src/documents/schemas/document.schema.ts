import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class DocumentEntity extends Document {
  @Prop({ required: true })
  title: string;

  @Prop()
  description: string;

  @Prop()
  fileUrl: string;

  @Prop({ default: Date.now })
  createdAt: Date;
}

export const DocumentSchema = SchemaFactory.createForClass(DocumentEntity);
