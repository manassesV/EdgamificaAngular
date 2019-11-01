import { Component } from '@angular/core';
import { UserLogin } from '../../services/User.login';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms'




@Component({
    templateUrl: './LoginCad.page.html',
    styleUrls: ['./Login.page.css'],
})


export class LoginCad {

    
    userForm = new FormGroup({
        email: new FormControl('', Validators.required),
        password: new FormControl(['', Validators.required]),
        passwordConfirm: new FormControl(['', Validators.required])
    },this.passwordMatchValidator);

    private loading: boolean = false;

    constructor(
        private userlogin: UserLogin,
        private route: ActivatedRoute,
        private router: Router) { }

    ngOnInit() {


    }

     passwordMatchValidator(g: FormGroup) {
        return g.get('password').value === g.get('passwordConfirm').value
           ? null : {'mismatch': true};
     }




    onSubmit() {
        var self = this;
        var dados = {
            ...this.userForm.value
        };

        this.userlogin.cadastrar(dados.email, dados.password,
            function (ret) {
                self.router.navigate(['list']);
            },
            function (dados) {
                console.log(dados);

                alert("Erro ao cadastrar-se");
            });

    }

    login() {
        this.router.navigate(["/"]);
    }
}

