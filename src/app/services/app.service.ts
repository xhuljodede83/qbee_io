import { Injectable } from '@angular/core';
import { BehaviorSubject, fromEvent, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  // This class will be used to handle Title update for Each page and to toggle drawer open/close in responsive mode

  drawerOpened$ = new BehaviorSubject(true);
  title$ = new BehaviorSubject('');

  constructor() {
  }

  // Functions to tack drawer toggle
  toggleDrawer() {
    this.drawerOpened$.next(!this.drawerOpened$.getValue());
  }

  closeDrawer() {
    this.drawerOpened$.next(false);
  }

  openDrawer() {
    this.drawerOpened$.next(true);
  }

  // Function to update Page Title
  updateTitle(title: string) {
    this.title$.next(title);
  }
}
