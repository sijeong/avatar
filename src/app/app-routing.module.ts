import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingsContainerComponent } from './settings';

import { UserMainComponent } from './usermanagement/user-main/user-main.component';
import { OptionMainComponent } from './optionmanagement/option-main/option-main.component';
import { NoticeMainComponent } from './notice/notice-main/notice-main.component';

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
  {
    path: 'settings',
    component: SettingsContainerComponent,
    data: { title: 'anms.menu.settings' }
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
    path: 'optionmanagement',
    component: OptionMainComponent
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
