import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Document } from './document.model';
import { Observable } from 'rxjs';
import { environment } from '../../../enviroments/enviroment';

@Injectable({
  providedIn: 'root',
})
export class DocumentService {
  readonly contextPath = '/documents';
  private apiUrl = environment.apiUrl + this.contextPath; 

  constructor(private http: HttpClient) {}

  getDocuments(): Observable<Document[]> {
    return this.http.get<Document[]>(this.apiUrl);
  }

  getDocumentbyId(id: string): Observable<Document>{
    return this.http.get<Document>(`${this.apiUrl}?id=${id}`)
  }

  getDocumentsByTitle(keyword: string): Observable<Document[]> {
    const url = `${this.apiUrl}?query=${encodeURIComponent(keyword)}`;
    return this.http.get<Document[]>(url);
  }

  deleteDocument(documentId: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${documentId}`);
  }
}
