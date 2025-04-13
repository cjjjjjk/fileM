import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class XssListService {
  private isVisibleSubject = new BehaviorSubject<boolean>(true); 

  isVisible$ = this.isVisibleSubject.asObservable();

  show() {
    this.isVisibleSubject.next(true);
  }

  hide() {
    this.isVisibleSubject.next(false);
  }

  toggle() {
    this.isVisibleSubject.next(!this.isVisibleSubject.value);
  }
}
