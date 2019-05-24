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

// import { ChartsModule } from 'ng2-charts';
// import { ChartComponent as OldChartComponet } from './services/chart/chart.component';
// import { StoreModule } from '@ngrx/store';
// import { StoreDevtoolsModule } from '@ngrx/store-devtools';

// import {reducers, metaReducers} from './entity/reducers';
// import { environment } from '../environments/environment';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartComponent } from './avatar/chart/chart.component';
import { RouterModule } from '@angular/router';
import { NoticeComponent } from './entity/notice/notice/notice.component';
import { NoticeDetailComponent } from './notice/notice-detail/notice-detail.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';
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
    // ChartsModule,

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
    MatMenuModule,

    // StoreModule.forRoot(reducers, { metaReducers }),
    // !environment.production ? StoreDevtoolsModule.instrument() : [],

    FlexLayoutModule,
    NgxChartsModule,
    RouterModule.forRoot(
      [
        {
          path: "notice",
          component: NoticeComponent
        },
        {
          path: "noticeDetail",
          component: NoticeDetailComponent
        },
      ],
      {

        scrollPositionRestoration: "enabled",
        anchorScrolling: "enabled",
        enableTracing: false
      }
    ),
    FontAwesomeModule
  ],
  declarations: [
    AppComponent,
    NoticeFormComponent,
    MenuComponent,
    NoticeTableComponent,
    DashboardComponent,
    HomeComponent,
    ChartComponent
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    library.add(faArrowDown, faArrowUp);
  }
}
