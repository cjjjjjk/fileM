import { Component, OnInit } from '@angular/core';
import { DocumentService } from '../document.service';
import { Document } from '../document.model';

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  standalone: false
})
export class DocumentListComponent implements OnInit {
  documents: Document[] = [];

  constructor(private documentService: DocumentService) {}

  ngOnInit() {
    this.documentService.getDocuments().subscribe((docs) => {
      this.documents = docs;
    });
  }

  onDocumentDeleted(documentId: string) {
    this.documents = this.documents.filter(doc => doc._id !== documentId);
  }
}
