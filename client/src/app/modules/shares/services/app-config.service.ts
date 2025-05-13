// src/app/services/app-config.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../enviroments/enviroment';

interface AppConfig {
  iframe_protection_enabled: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {
  readonly contextPath = '/app-config';
  private apiUrl = environment.apiUrl + this.contextPath; 

  constructor(private http: HttpClient) {}

  getConfig(): Observable<AppConfig> {
    return this.http.get<AppConfig>(this.apiUrl);
  }

  updateConfig(config: Partial<AppConfig>): Observable<AppConfig> {
    return this.http.put<AppConfig>(this.apiUrl, config);
  }
}
