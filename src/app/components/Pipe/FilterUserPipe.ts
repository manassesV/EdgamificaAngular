import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filterUser',
})
export class FilterUserPipe implements PipeTransform {

    transform(items: any, filter: string) {

		if(filter != "") {
			var values = items.filter(function(data) {
                return data.name.toUpperCase().includes(filter.toUpperCase())
                  || data.email.toUpperCase().includes(filter.toUpperCase()) 
                  || data.cpf.toUpperCase().includes(filter.toUpperCase()) ;
			});
	
			return values;
		}

		return items;
    }
}