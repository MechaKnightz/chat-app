import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent }      from './heroes/heroes.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
import { ChatComponent } from './chat/chat.component';
import { LoginComponent } from '@app/login/login.component'
import { HomeComponent } from './home/home.component';

import { AuthGuard } from '@app/_guards/auth.guard'
import { BaseComponent } from './base/base.component';

const routes: Routes = [
  { path: '', redirectTo: '/chat', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'chat', component: BaseComponent,  canActivate: [AuthGuard]  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule { }