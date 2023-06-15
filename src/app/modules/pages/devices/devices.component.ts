import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { IDevice } from 'src/app/interfaces/device';
import { AppService } from 'src/app/services/app.service';
import { DeviceService } from 'src/app/services/device.service';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss']
})
export class DevicesComponent implements OnInit {

  public devices: IDevice[] = [];
  public columns: string[] = ['device_name', 'device_tags', 'device_desc_indicator'];
  public dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private appService: AppService,
    private deviceService: DeviceService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.appService.updateTitle('Devices');
    this.fetchAllDevices();
  }

  //  function responsible to fetch data from API and generate data source for mat-table
  public fetchAllDevices() {
    this.deviceService.getAllDevices()
      .subscribe(
        (res) => {
          this.devices = res;
          this.dataSource = new MatTableDataSource(res);
          this.dataSource.paginator = this.paginator;
          // reflect changes to front end
          this.cdr.detectChanges();
        },
        (err) => {
          console.log(err)
        }
      );
  }

  public capitalizeName(name: string) {
    return name.charAt(0).toUpperCase() + name.slice(1);
  }

  // concatenates all tags to a string by truncating tags with name length > 8
  public getTagsList(tags: string[]) {
    let result: string = "";

    tags.forEach((tag) => {
      result += (tag.length > 8 ? tag.slice(0, 8).concat("...") : tag) + ", ";
    });
    return result.slice(0, -2);
  }

  //  gets desc indicator color based on desc string length
  public getDescIndicatorColor(desc: string) {
    if (desc.length >= 100) {
      return 'green';
    } else if (desc.length >= 50 && desc.length < 100) {
      return 'yellow';
    } else {
      return 'red';
    }
  }
}
