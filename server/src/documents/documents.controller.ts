import { Controller, Get, Post, Body, Param, Delete, Query } from '@nestjs/common';
import { DocumentsService } from './documents.service';

@Controller('documents')
export class DocumentsController {
  constructor(private readonly documentsService: DocumentsService) {}

  @Post()
  create(@Body() data: any) {
    return this.documentsService.create(data);
  }

  @Get()
  async findAll(@Query('query') q?: string) {
    if (q) {
      return this.documentsService.searchByTitle(q);
    }
    return this.documentsService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.documentsService.findById(id);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.documentsService.delete(id);
  }
}
