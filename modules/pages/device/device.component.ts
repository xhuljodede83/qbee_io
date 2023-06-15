import { Component, ElementRef, EventEmitter, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { ActivatedRoute, Router } from '@angular/router';
import { IDevice } from 'src/app/interfaces/device';
import { AppService } from 'src/app/services/app.service';
import { DeviceService } from 'src/app/services/device.service';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { MatChipInputEvent } from '@angular/material/chips';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.scss']
})
export class DeviceComponent implements OnInit {
  public id_param: string = "";
  public device: IDevice = {
    name: '',
    description: '',
    tags: []
  };
  public deviceForm!: FormGroup;

  // separater key codes for tags field
  public separatorKeysCodes: number[] = [ENTER, COMMA];
  public selectable: boolean = true;
  public removable: boolean = true;

  onChange = new EventEmitter();

  constructor(
    private appService: AppService,
    private deviceService: DeviceService,
    private snackbarService: SnackbarService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.appService.updateTitle(`Devices -> `);

    // initializes form with empty data form controls
    this.deviceForm = new FormGroup({
      device_id: new FormControl(this.device?.id, []),
      device_name: new FormControl(this.device?.name, Validators.required),
      device_tags: new FormControl(this.device?.tags, []),
      device_desc: new FormControl(this.device?.description, [])
    });

    this.id_param = this.route.snapshot.paramMap.get('id') || "";
    this.fetchDevice();
  }

  // fetches device data
  public fetchDevice() {
    this.deviceService.getDevice(this.id_param)
      .subscribe((res) => {
        this.device = res;
        // populates deviceForm controls with Device Data
        this.buildDeviceForm(this.device);
      }, (err) => {
        if (err.status === 404) {
          alert('Invalid Device ID: ' + this.id_param)
          this._backToDevicesPage();
        }
      });
  }

  public buildDeviceForm(device: IDevice) {
    this.deviceForm.patchValue({ device_id: device.id })
    this.deviceForm.patchValue({ device_name: device.name })
    this.deviceForm.patchValue({ device_tags: device.tags })
    this.deviceForm.patchValue({ device_desc: device.description })

    // updates page Title
    this.appService.updateTitle(`Devices -> ${device.name}`);
  }

  // method to handle add tag
  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    if (value) {
      this.device.tags.push(value);
      this.deviceForm.patchValue({ device_tags: this.device.tags })
    }
    event.chipInput!.clear();
    this.onChange.emit();
  }

  // method to handle remove tag
  remove(tag: any): void {
    let index = this.device.tags.indexOf(tag);
    this.device.tags.splice(index, 1);
    this.deviceForm.patchValue({ device_tags: this.device.tags })
    this.onChange.emit();
  }

  // function to handle form submit
  public onSubmit() {
    // submits form if name valid and present else returns with a message to guide user
    let device_name = this.deviceForm.controls['device_name'].value.trim();
    if (!this.deviceForm.valid || device_name === "") {
      this.snackbarService.open('Device Name is Required');
      return;
    }

    // device name present, now creates a device object for PUT action
    let newDevice: IDevice = {
      id: this.deviceForm.controls['device_id'].value,
      name: device_name,
      tags: this.deviceForm.controls['device_tags'].value,
      description: this.deviceForm.controls['device_desc'].value
    }

    // if device updates successfully, show message and re routes back to Device Listing page
    // else displays an error message
    this.deviceService.editDevice(newDevice).subscribe(
      (res) => {
        this.snackbarService.open('Device Data Updated Successfully.');
        this._backToDevicesPage();
      }, (err) => {
        this.snackbarService.open('Error Updating Device Data. Please Try Again.')
      }
    );
  }

  // function that re routes back to Device Listing Page
  _backToDevicesPage() {
    this.router.navigate(['/devices']);
  }
}
