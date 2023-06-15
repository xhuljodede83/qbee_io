import { Component, OnInit } from '@angular/core';
import { fromEvent, map } from 'rxjs';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  public windowSize: number = window.innerWidth;

  // Show Navigations links to render dynamically
  adminLinks = [
    {
      path: '/home',
      label: 'Home',
    },
    {
      path: '/devices',
      label: 'Devices',
    },
    {
      path: '/support',
      label: 'Support',
    },
  ]

  constructor(public appService: AppService) {
    fromEvent(window, 'resize')
      .pipe(map((event: any) => event.currentTarget.innerWidth))
      .subscribe((windowSize) => {
        if(windowSize > 600) {
          appService.openDrawer()
        }
        this.windowSize = windowSize;
      });
  }

  ngOnInit(): void {
  }

}
