import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListPage } from './pages/UserList/UserList.page'
import { LoginPage } from './pages/User/Login.page'
import { UserPage } from './pages/User/User.page'
import { LoginCad } from './pages/User/LoginCad.page'
import { NotFoundComponent } from './pages/NotFoundComponent'
import { AuthGuard } from './core/auth.guard';


const routes: Routes = [
  {
    path: '',
    component: LoginPage,
  },
  {
    path: 'cadastrar',
    component: LoginCad
  },
  {
    path: 'user/:id',
    component: UserPage,
    canActivate: [AuthGuard]
  },
  {
    path: 'user',
    component: UserPage,
    canActivate: [AuthGuard]
  },
  {
    path: 'list',
    component: UserListPage,
    canActivate: [AuthGuard]
  },
  {
    path: 'page-not-found',
    component: NotFoundComponent
  },
  {
    path: '**',
    redirectTo: '/page-not-found'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
