import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchByCity'
})
export class SearchByCityPipe implements PipeTransform {

  transform(objects, cityQuery): any {
    if(cityQuery) {
      return objects.filter(object => {
        if (object.city) {
          return object.city.includes(cityQuery)
        } else if (object.cities) {
          return object.cities.includes(cityQuery)
        }
      })
    } else return objects;
  }

}
