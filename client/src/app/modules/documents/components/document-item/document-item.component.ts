import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Document } from '../../document.model';
import { DocumentService } from '../../document.service';

@Component({
  selector: 'app-document-item',
  templateUrl: './document-item.component.html',
  styleUrls: ['./document-item.component.css'],
  standalone: false
})
export class DocumentItemComponent {
  @Input() document!: Document;
  @Output() delete = new EventEmitter<string>();

  constructor(private documentService: DocumentService) {}

  onDeleteDocument(documentId: string) {
    this.documentService.deleteDocument(documentId).subscribe(() => {
      this.delete.emit(documentId);
    }, error => {
      console.error('Error deleting document:', error);
    });
  }
}
