import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/pages/home/home.component';
import { DevicesComponent } from './modules/pages/devices/devices.component';
import { SupportComponent } from './modules/pages/support/support.component';
import { DeviceComponent } from './modules/pages/device/device.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'devices', component: DevicesComponent },
  { path: 'devices/:id', component: DeviceComponent },
  { path: 'support', component: SupportComponent },
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }
