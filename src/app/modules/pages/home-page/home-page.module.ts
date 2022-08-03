import { SharedModule } from 'app/shared/shared.module';
import { TranslocoModule } from '@ngneat/transloco';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { Route, RouterModule } from '@angular/router';
import { HeaderComponent } from 'app/shared/header/header.component';


const homeRoutes: Route[] = [
    {
        path: '',
        component: HomePageComponent
    }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(homeRoutes),
    TranslocoModule,
    SharedModule,
  ],
  declarations: [HomePageComponent,HeaderComponent]
})
export class HomePageModule { }
