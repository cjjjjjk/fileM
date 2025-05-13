import { Component } from '@angular/core';
import { IframeGuardService } from '../../../services/iframe-guard.service';

@Component({
  selector: 'app-clickjacking-controls',
  standalone: false,
  templateUrl: './clickjacking-controls.component.html',
  styleUrl: './clickjacking-controls.component.scss'
})
export class ClickjackingControlsComponent {
  constructor(public iframeGuardService: IframeGuardService) {}

  toggleCheck(): void {
    const current = this.iframeGuardService.isIframeCheckEnabled();
    this.iframeGuardService.setIframeCheckEnabled(!current);
  }
}
