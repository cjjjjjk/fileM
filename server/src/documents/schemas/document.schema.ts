import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class DocumentEntity extends Document {
  @Prop({ required: true })
  title: string;
  
  @Prop()
  titleNoAccent?: string;

  @Prop()
  description: string;

  @Prop()
  fileUrl: string;

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop({default: 0}) 
  likeRate: number
}

export const DocumentSchema = SchemaFactory.createForClass(DocumentEntity);
