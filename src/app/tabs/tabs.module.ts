import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children:
    [
      {
        path: 'home',
        children:[
            {
              path: '',
              loadChildren: '../home/home.module#HomePageModule'
            }
          ]
      },
      {
        path: 'profil',
        children:
          [
            {
              path: '',
              loadChildren: '../profil/profil.module#ProfilPageModule'
            }
          ]
      },
      {
        path: 'pengaduan',
        children:
          [
            {
              path: '',
              loadChildren: '../pengaduan/pengaduan.module#PengaduanPageModule'
            }
          ]
      },
      {
        path: 'pengaturan',
        children:
          [
            {
              path: '',
              loadChildren: '../pengaturan/pengaturan.module#PengaturanPageModule'
            }
          ]
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
        {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
];


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
