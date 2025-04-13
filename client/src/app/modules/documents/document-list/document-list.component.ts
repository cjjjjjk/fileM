import { Component, OnInit } from '@angular/core';
import { DocumentService } from '../document.service';
import { Document } from '../document.model';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { XssListService } from '../../shares/services/xss-list.services';

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrl: './document-list.component.scss',
  standalone: false
})
export class DocumentListComponent implements OnInit {
  documents: Document[] = [];
  filteredDocuments: Document[] = [];
  searchTerm: string = '';


  // Query test =======================
  createDocQuery: string = `<a href="javascript:fetch('http://localhost:3000/api/documents', { method: 'POST',headers: { 'Content-Type': 'application/json' },   body: JSON.stringify({     title: 'Tài liệu giả đươc chèn vào ${Math.floor(Math.random()*10000)}',     description: '<b>Nội dung bị chèn</b>',     fileUrl: 'https://xss-test.com/fake'}) })">Tạo tài liệu Giả</a>`

  // ====================================

  constructor(
    private router: Router,
    private documentService: DocumentService,
    private sanitizer: DomSanitizer,
    private xssListService: XssListService
  ) {}

  ngOnInit() {
    this.documentService.getDocuments().subscribe((docs) => {
      this.documents = docs;
      this.filteredDocuments = docs;
    });
  }

  safeHtml(html: string) {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

  onSearchTermChange(isSync?: boolean) {
    let query = this.searchTerm.trim();
    if (isSync) {
      query = '';
    }
    this.documentService.getDocumentsByTitle(query).subscribe((filteredDocs) => {
      this.filteredDocuments = filteredDocs;
    });
  }

  onDocumentDeleted(documentId: string) {
    this.documents = this.documents.filter(doc => doc._id !== documentId);
    this.onSearchTermChange(); // Update filtered list after deletion
  }

  navigate(url: string) {
    this.router.navigateByUrl(url);
  }

  showList(){
    this.xssListService.show()
  }
}
