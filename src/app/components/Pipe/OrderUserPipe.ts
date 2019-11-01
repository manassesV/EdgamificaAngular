import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';


@Pipe({
    name: 'orderUser',
})
export class OrderUserPipe implements PipeTransform {
    transform(items: any, orderUser: string) {

		if(orderUser) {
			var dados  =  _.orderBy(items, ['name'], [orderUser]);
            return dados;
        }

		return items;
    }
}