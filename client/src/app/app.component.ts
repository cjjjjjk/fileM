// src/app/app.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IframeGuardService } from './modules/shares/services/iframe-guard.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'fileM';

  constructor(
    private router: Router,
    private iframeGuardService: IframeGuardService
  ) {}

  async ngOnInit(): Promise<void> {
    await this.iframeGuardService.loadIframeCheckSetting();

    if (this.iframeGuardService.isIframeCheckEnabled() && window.top !== window.self) {
      this.router.navigateByUrl('/error/403');
    }
  }
}
