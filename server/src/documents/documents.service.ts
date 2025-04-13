import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { DocumentEntity } from './schemas/document.schema';

@Injectable()
export class DocumentsService {
  constructor(
    @InjectModel(DocumentEntity.name)
    private readonly documentModel: Model<DocumentEntity>,
  ) {}

  async create(data: Partial<DocumentEntity>) {
    const doc = new this.documentModel(data);
    return doc.save();
  }

  async findAll() {
    return this.documentModel.find().exec();
  }

  async findById(id: string) {
    return this.documentModel.findById(id).exec();
  }

  async delete(id: string) {
    return this.documentModel.findByIdAndDelete(id).exec();
  }
}
