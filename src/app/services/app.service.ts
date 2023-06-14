import { Injectable } from '@angular/core';
import { BehaviorSubject, fromEvent, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  drawerOpened$ = new BehaviorSubject(true);
  title$ = new BehaviorSubject('');

  public readonly windowSizeChanged = new BehaviorSubject<number>(
    window.innerWidth
  );

  constructor() {
    fromEvent(window, 'resize')
      .pipe(map((event: any) => event.currentTarget.innerWidth))
      .subscribe((windowSize) => {
        this.windowSizeChanged.next(windowSize);
      });
  }

  toggleDrawer() {
    this.drawerOpened$.next(!this.drawerOpened$.getValue());
  }

  closeDrawer() {
    this.drawerOpened$.next(false);
  }

  openDrawer() {
    this.drawerOpened$.next(true);
  }

  updateTitle(title: string) {
    this.title$.next(title);
  }
}
