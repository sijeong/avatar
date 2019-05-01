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

import { ChartsModule } from 'ng2-charts';
import { ChartComponent } from './services/chart/chart.component';
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

    //Chart
    ChartsModule,

    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemWebService, {
      passThruUnknownUrl: true
    })

    // StoreModule.forRoot(reducers, { metaReducers }),
    // !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  declarations: [AppComponent, ChartComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
