import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Document } from '../../document.model';
import { DocumentService } from '../../document.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-document-item',
  templateUrl: './document-item.component.html',
  styleUrls: ['./document-item.component.css'],
  standalone: false
})
export class DocumentItemComponent {
  @Input() document!: Document;
  @Output() delete = new EventEmitter<string>();

  constructor(
    private route: Router,
    private documentService: DocumentService,
    private sanitizer: DomSanitizer,) {}

  onDeleteDocument(documentId: string) {
    this.documentService.deleteDocument(documentId).subscribe(() => {
      this.delete.emit(documentId);
    }, error => {
      console.error('Error deleting document:', error);
    });
  }

  safeHtml(html: string) {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

  navigate(){
    this.route.navigateByUrl('/document/'+this.document._id)
  }
}
