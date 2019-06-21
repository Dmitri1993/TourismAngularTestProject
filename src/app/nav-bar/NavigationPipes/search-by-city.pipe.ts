import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchByCity'
})
export class SearchByCityPipe implements PipeTransform {

  transform(objects, cityQuery): any {
    if(cityQuery) {
      return objects.filter(object => {
        return object.city.includes(cityQuery)
      })
    } else return objects;
  }

}
