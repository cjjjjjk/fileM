import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DocumentService } from '../documents/document.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-document',
  standalone: false,
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.scss']  // Fix styleUrl -> styleUrls
})
export class DocumentComponent implements OnInit {
  document: any;

  constructor(
    private documentService: DocumentService,
    private route: ActivatedRoute  // Inject ActivatedRoute để lấy tham số id
  ) {}

  ngOnInit(): void {
    // Sử dụng ActivatedRoute để lấy tham số id từ URL
    const id = this.route.snapshot.paramMap.get('id');  // 'id' là tham số trong URL

    if (id) {
      // Gọi dịch vụ để lấy tài liệu theo id
      this.documentService.getDocumentbyId(id).subscribe(
        (data) => {
          this.document = data;  // Gán dữ liệu trả về vào biến document
          console.log(this.document);  // In dữ liệu ra console để kiểm tra
        },
        (error) => {
          console.error('Error fetching document:', error);  // In lỗi nếu có
        }
      );
    } else {
      console.error('Document ID is missing in URL');
    }
  }

  getRandomClass(): string {
    const classes = [
      'bg-primary', 'bg-secondary', 'bg-success', 'bg-danger', 'bg-warning','card', 'alert','px-2','mt-3','btn', 'font-monospace', 
      'bg-info', 'bg-light', 'text-white', 'text-dark','alert-success','fs-1', 'fs-4','fs-2', 'fs-3','fs-5','text-center','fw-3','fs-6 text','fst-italic'
    ];
    return `${classes[Math.floor(Math.random() * classes.length)]} ${classes[Math.floor(Math.random() * classes.length)]} ${classes[Math.floor(Math.random() * classes.length)]}`;
  }
}
