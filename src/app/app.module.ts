import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { SharedModule } from '@app/shared';
import { CoreModule } from '@app/core';

import { SettingsModule } from './settings';
import { StaticModule } from './static';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { UsermanagementModule } from './usermanagement/usermanagement.module';
import { OptionmanagementModule } from './optionmanagement/optionmanagement.module';
import { NoticeModule } from './notice/notice.module';

import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemWebService } from './entity/in-mem-web-service';
import { ProductManagementModule } from './productManagement/product-management.module';
import { NoticeFormComponent } from './avatar/notice-form/notice-form.component';
import {
  MatInputModule,
  MatButtonModule,
  MatSelectModule,
  MatRadioModule,
  MatCardModule,
  MatToolbarModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatGridListModule,
  MatMenuModule
} from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { MenuComponent } from './avatar/menu/menu.component';
import { LayoutModule } from '@angular/cdk/layout';
import { NoticeTableComponent } from './avatar/notice-table/notice-table.component';
import { DashboardComponent } from './avatar/dashboard/dashboard.component';
import { HomeComponent } from './avatar/home/home.component';

// import { StoreModule } from '@ngrx/store';
// import { StoreDevtoolsModule } from '@ngrx/store-devtools';

// import {reducers, metaReducers} from './entity/reducers';
// import { environment } from '../environments/environment';

@NgModule({
  imports: [
    // angular
    BrowserAnimationsModule,
    BrowserModule,

    // core & shared
    CoreModule,
    SharedModule,

    // features
    StaticModule,
    SettingsModule,

    // app
    AppRoutingModule,

    //usermanagement
    UsermanagementModule,

    //optionmanagement
    OptionmanagementModule,

    //notice
    NoticeModule,

    //Product
    ProductManagementModule,

    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemWebService, {
      passThruUnknownUrl: true
    }),
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatGridListModule,
    MatMenuModule

    // StoreModule.forRoot(reducers, { metaReducers }),
    // !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  declarations: [
    AppComponent,
    NoticeFormComponent,
    MenuComponent,
    NoticeTableComponent,
    DashboardComponent,
    HomeComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
