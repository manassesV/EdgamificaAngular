import { Component } from '@angular/core'
import { UserLogin } from '../../services/User.login';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
   selector: 'header-component',
   templateUrl: './Header.component.html',
   styleUrls: ['./Header.component.css']
})

export class HeaderComponent {


   constructor(
      private userlogin: UserLogin,
      private route: ActivatedRoute,
      private router: Router
   ){

   }


   auth(){
      return this.userlogin.authenticated;
   }

   logout(){
      this.userlogin.logout();
      this.router.navigate(['/']);
   }
}
