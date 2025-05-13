// src/app/services/iframe-guard.service.ts
import { Injectable } from '@angular/core';
import { AppConfigService } from './app-config.service';

@Injectable({
  providedIn: 'root'
})
export class IframeGuardService {
  private checkIframe = false;

  constructor(private appConfigService: AppConfigService) {}

  loadIframeCheckSetting(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.appConfigService.getConfig().subscribe({
        next: (config) => {
          this.checkIframe = !!config.iframe_protection_enabled;
          resolve();
        },
        error: (err) => reject(err)
      });
    });
  }

  setIframeCheckEnabled(enabled: boolean): void {
    this.checkIframe = enabled;
    this.appConfigService.updateConfig({ iframe_protection_enabled: enabled }).subscribe();
  }

  isIframeCheckEnabled(): boolean {
    return this.checkIframe;
  }
}
