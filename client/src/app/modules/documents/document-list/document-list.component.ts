import { Component, OnInit } from '@angular/core';
import { DocumentService } from '../document.service';
import { Document } from '../document.model';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { XssListService } from '../../shares/services/xss-list.services';
import { delay } from 'rxjs/operators'; 

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
  loading: boolean = false; 

  constructor(
    private router: Router,
    private documentService: DocumentService,
    private sanitizer: DomSanitizer,
    private xssListService: XssListService
  ) {}

  ngOnInit() {
    this.loading = true; 
    this.documentService.getDocuments()
      .pipe(delay(500))
      .subscribe((docs) => {
        this.documents = docs;
        this.filteredDocuments = docs;
        this.loading = false; 
      }, () => {
        this.loading = false; 
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
    this.loading = true; 
    this.documentService.getDocumentsByTitle(query)
      .pipe(delay(500)) 
      .subscribe((filteredDocs) => {
        this.filteredDocuments = filteredDocs;
        this.loading = false; 
      }, () => {
        this.loading = false; 
      });
  }

  onDocumentDeleted(documentId: string) {
    this.documents = this.documents.filter(doc => doc._id !== documentId);
    this.onSearchTermChange();
  }

  navigate(url: string) {
    this.router.navigateByUrl(url);
  }

  showList(){
    this.xssListService.show()
  }
}
