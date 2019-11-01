import { Component } from '@angular/core';
import { UserService } from '../../services/Users.service';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
   selector: 'user-list',
   templateUrl: './UserList.page.html',
   styleUrls: ['./UserList.page.css']
})


export class UserListPage{

   public array=[] ;
   public orderUser: string = '';
   public filterUser: string = '';


   constructor(
     private userservice: UserService,
     private route: ActivatedRoute,
     private router: Router){}

   ngOnInit() {
      this.get_all();
   }

   private get_all() {
      this.array = [];
      this.userservice.getall().subscribe((data: any) => {
         data.forEach(element => {
            const { doc } = element.payload;
            const id = doc.id;
            const result = doc.data();
            var dados = {
               ...result,
               value: id
            };
            this.array.push(dados);
         });
      });
   }

   remove(id){
      this.array=[];
      var self = this;
       this.userservice.remove(id, function(next){
         self.userservice.getall().subscribe((data: any) => {
            self.array = [];
            data.forEach(element => {
               const { doc } = element.payload;
               const id = doc.id;
               const result = doc.data();
               var dados = {
                  ...result,
                  value: id
               };
               self.array.push(dados);
            });
         });
       },function(error){
          alert("Erro ao remover o usuário");
      })
   }

   search(event: any){
      this.filterUser = event.target.value
   }

   orderUserAsc(){
       this.orderUser = "asc"
   }

   orderUserDesc(){
      this.orderUser = "desc"
  }

  mascaraCpf(valor) {
   return valor.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g,"\$1.\$2.\$3\-\$4");
  }
}