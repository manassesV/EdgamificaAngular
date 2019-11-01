import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
    templateUrl: 'NotFoundComponent.html',
    styleUrls: ['NotFoundComponent.css']
})

export class NotFoundComponent {




    constructor(
        private route: ActivatedRoute,
        private router: Router) { }

    ngOnInit() {

    
      
    }


}

