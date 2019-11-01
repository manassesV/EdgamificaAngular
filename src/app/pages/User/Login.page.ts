import { Component } from '@angular/core';
import { UserLogin } from '../../services/User.login';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Alert } from 'selenium-webdriver';



@Component({
    templateUrl: './Login.page.html',
    styleUrls: ['./Login.page.css'],
})

export class LoginPage {

    userForm = new FormGroup({
        email: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required),
    });

    private loading: boolean = false;

    constructor(
        private userlogin: UserLogin,
        private route: ActivatedRoute,
        private router: Router) { }

    ngOnInit() {


    }





    onSubmit() {
        var self = this;
        var dados = {
            ...this.userForm.value
        };

        this.userlogin.login(dados.email, dados.password,
            function (dados) {
                self.router.navigate(['list'])
            },
            function (dados) {
                alert("Erro, usuário incorreto ou dados inexistente");
            });

    }

    cadastrar(){
        this.router.navigate(['cadastrar'])
    }
}

