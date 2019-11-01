import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';


@Injectable({ providedIn: 'root' })
export class UserLogin {
    constructor(
        private auth: AngularFireAuth) { }

    private loading: Boolean = false

    login(email, password, next, error) {
        
        this.auth.auth
        .signInWithEmailAndPassword(email, password)
        .then(value => {
          next(value)
        })
        .catch(err => {
          error(err)
        });
    }

    cadastrar(email, password, next, error) {
        
        this.auth.auth
        .createUserWithEmailAndPassword(email, password)
        .then(value => {
          next(value)
        })
        .catch(err => {
          error(err)
        });
    }


    // Returns true if user is logged in

    
    get authenticated(): boolean {
      return this.auth.auth.currentUser !== null;
    }

   logout(){
     this.auth.auth.signOut();
   }
}