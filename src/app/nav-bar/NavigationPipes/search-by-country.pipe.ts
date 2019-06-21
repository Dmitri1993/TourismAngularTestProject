import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchByCountry'
})
export class SearchByCountryPipe implements PipeTransform {

  transform(objects, countryQuery): any {
    return objects.filter(object => {
      if(countryQuery) {
        return object.country == countryQuery
      } else return objects
    })
  }

}
