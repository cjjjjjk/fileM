import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { DocumentEntity } from './schemas/document.schema';
import { removeVietnameseTones } from 'src/utils/nomalizeVN';

@Injectable()
export class DocumentsService {
  constructor(
    @InjectModel(DocumentEntity.name)
    private readonly documentModel: Model<DocumentEntity>,
  ) {}

  async create(data: Partial<DocumentEntity>) {
    const titleNoAccent = removeVietnameseTones(data.title || '');
    const doc = new this.documentModel({ ...data, titleNoAccent });
    return doc.save();
  }

  async findAll() {
    return this.documentModel.find().sort({ likeRate: 1 }).exec();
  }

  async findById(id: string) {
    return this.documentModel.findById(id).exec();
  }

  async delete(id: string) {
    return this.documentModel.findByIdAndDelete(id).exec();
  }

  async searchByTitle(keyword: string) {
    const cleanKeyword = removeVietnameseTones(keyword.trim().toLowerCase());
  
    return this.documentModel.find({
      $or: [
        { titleNoAccent: { $regex: cleanKeyword, $options: 'i' } },
        { title: { $regex: keyword, $options: 'i' } }, 
      ],
    }).exec();
  }

  async likeUpdate(isLike: boolean, id: string) {
    const doc = await this.documentModel.findById(id).exec();
    if (!doc) {
      throw new Error('Document not found');
    }
  
    if (doc.likeRate === undefined || doc.likeRate === null) {
      doc.likeRate = 0;
    }
  
    doc.likeRate += isLike ? 1 : -1;
  
    await doc.save();
    return {resCode: 'success', _id: doc._id , likeCount: doc.likeRate};
  }

}
