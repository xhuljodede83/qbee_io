import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


// Angular Material Imports
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatChipsModule } from '@angular/material/chips';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

// Angular App Pages Imports
import { HomeComponent } from './modules/pages/home/home.component';
import { DevicesComponent } from './modules/pages/devices/devices.component';
import { SupportComponent } from './modules/pages/support/support.component';
import { DeviceComponent } from './modules/pages/device/device.component';

// Angular App Component Imports
import { SideBarComponent } from './modules/shared/side-bar/side-bar.component';
import { FooterComponent } from './modules/shared/footer/footer.component';
import { HeaderComponent } from './modules/shared/header/header.component';
import { LogoComponent } from './modules/shared/logo/logo.component';


@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    FooterComponent,
    HeaderComponent,
    LogoComponent,
    HomeComponent,
    DevicesComponent,
    SupportComponent,
    DeviceComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatPaginatorModule,
    MatTableModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatChipsModule,
    MatAutocompleteModule
  ],
  exports: [
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatPaginatorModule,
    MatTableModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatChipsModule,
    MatAutocompleteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
