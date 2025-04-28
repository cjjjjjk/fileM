import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DocumentService } from '../documents/document.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-document',
  standalone: false,
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.scss']  
})
export class DocumentComponent implements OnInit {
  document: any;
  documentId!: string | null;

  constructor(
    private documentService: DocumentService,
    private route: ActivatedRoute  
  ) {}

  ngOnInit(): void {
    console.log('Component Init')
    const id = this.route.snapshot.paramMap.get('id');  
    this.documentId = id;
    if (id) {
      this.documentService.getDocumentbyId(id).subscribe(
        (data) => {
          this.document = data;  
          console.log(this.document);  
        },
        (error) => {
          console.error('Error fetching document:', error);  
        }
      );
    } else {
      console.error('Document ID is missing in URL');
    }

    this.getRandomClass()
    this.getRandomClass()
    this.getRandomClass()
    this.getRandomClass()
    this.getRandomClass()
    this.getRandomClass()
  }

  getRandomClass(): void {
    const classes = [
      'bg-primary', 'bg-secondary', 'bg-success', 'bg-danger', 'bg-warning','card', 'alert','px-2','mt-3','btn', 'font-monospace', 
      'bg-info', 'bg-light', 'text-white', 'text-dark','alert-success','fs-1', 'fs-4','fs-2', 'fs-3','fs-5','text-center','fw-3','fs-6 text','fst-italic'
    ];
    console.log( `${classes[Math.floor(Math.random() * classes.length)]} ${classes[Math.floor(Math.random() * classes.length)]} ${classes[Math.floor(Math.random() * classes.length)]}`)
  }

  upLike(isLike: boolean) {
    if (!this.documentId) {
      console.error('Document ID is missing');
      return;
    }
    this.documentService.updateLike(isLike, this.documentId).subscribe(
      (updatedDoc) => {
        console.log('Update Like/Dislike thành công:', updatedDoc);
        this.document.likeRate = updatedDoc.likeCount;
      },
      (error) => {
        console.error('Error updating Like/Dislike:', error);
      }
    );
  }  
}
