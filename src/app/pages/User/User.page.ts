import { Component } from '@angular/core';
import { UserService } from '../../services/Users.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms'



@Component({
    templateUrl: './User.page.html',
    styleUrls: ['./Login.page.css']
})

export class UserPage {

    userForm = new FormGroup({
        name: new FormControl('', Validators.required),
        cpf: new FormControl('', Validators.required),
        email: new FormControl('', [Validators.required, Validators.email]),
        cep: new FormControl('', [Validators.required]),
        endereco: new FormControl('', [Validators.required]),
        complemento: new FormControl('', [Validators.required]),
    });

    private loading: boolean = false;
    public userId: string = '';
    private Ids: string = '';
    private button: string = 'dados';

    constructor(
        private userservice: UserService,
        private route: ActivatedRoute,
        private router: Router) { }

    ngOnInit() {

        this.userId = this.route.snapshot.paramMap.get('id')

        if(this.userId != null){
            this.getUser(this.userId)
        }
      
    }


    private getUser(id: string) {
    
        this.userservice.getById(id)
         .subscribe((data: any) => {
          const { doc } = data[0].payload;


          this.Ids = doc.id;

          const result = doc.data();
    
           Object.keys(result).
           filter(item => item !== 'id').
           forEach((item) => {
               this.
                    userForm.
                    controls[item].
                    setValue(result[item]);
           })
        })
    }

  

    onSubmit() {
       
        this.loading = true

        if(this.userId != null){
          
            var dados = {
                id: this.userId,
                ...this.userForm.value
            }

            this.userservice.update(dados, this.Ids).then((data) => {
                console.log('result', data);
                this.loading = false;
    
            }).catch((err) => this.loading = false)
        
        }else{
            this.userservice.create(this.userForm.value).then((data) => {
                console.log('result', data);
                this.loading = false;
    
            }).catch((err) => this.loading = false)
        }


        this.router.navigate(['/list'])
        
    }
}

