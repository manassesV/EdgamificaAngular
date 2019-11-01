import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';


import { environment } from '../environments/environment';

import { ReactiveFormsModule } from '@angular/forms'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/Header/Header.component'
import { LoadingComponent } from './components/Loading/Loading.component'
import { LoginPage } from './pages/User/Login.page'
import { NotFoundComponent } from './pages/NotFoundComponent'
import { UserPage } from './pages/User/User.page'
import { HttpClientModule } from '@angular/common/http'
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { UserListPage } from './pages/UserList/UserList.page';
import { LoginCad } from './pages/User/LoginCad.page';


import { FilterUserPipe } from '../app/components/Pipe/FilterUserPipe';
import { OrderUserPipe } from '../app/components/Pipe/OrderUserPipe';

import { AuthGuard } from '../app/core/auth.guard';
import { ServiceWorkerModule } from '@angular/service-worker';

import { NgxMaskModule, IConfig } from 'ngx-mask';

var options: Partial<IConfig> | (() => Partial<IConfig>);


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserListPage,
    LoginPage,
    UserPage,
    LoadingComponent,
    LoginCad,
    NotFoundComponent,
    FilterUserPipe,
    OrderUserPipe
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(options),
    NgbModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
