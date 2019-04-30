import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingsContainerComponent } from './settings';

import { UserMainComponent } from './usermanagement/user-main/user-main.component';
import { OptionMainComponent } from './optionmanagement/option-main/option-main.component';
import { NoticeMainComponent } from './notice/notice-main/notice-main.component';
import { ProductMainComponent } from './productManagement/product-main/product-main.component';
import { HomeComponent } from './avatar/home/home.component';
import { NoticeDetailComponent } from './notice/notice-detail/notice-detail.component';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'about',
  //   pathMatch: 'full'
  // },

  // {
  //   path: 'examples',
  //   loadChildren: 'app/examples/examples.module#ExamplesModule'
  // },
  // {
  //   path: '**',
  //   redirectTo: 'about'
  // },
  // {
  //   path: 'settings',
  //   component: SettingsContainerComponent,
  //   data: { title: 'anms.menu.settings' }
  // },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'usermanagement',
    component: UserMainComponent
  },
  {
    path: 'notice',
    component: NoticeMainComponent
  },
  {
    path: 'noticedetail/:id',
    component: NoticeDetailComponent
  },
  {
    path: 'optionmanagement',
    component: OptionMainComponent
  },
  {
    path: 'productManagement',
    component: ProductMainComponent
  }
];

@NgModule({
  // useHash supports github.io demo page, remove in your app
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      scrollPositionRestoration: 'enabled'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
