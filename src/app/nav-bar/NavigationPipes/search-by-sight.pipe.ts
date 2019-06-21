import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchBySight'
})
export class SearchBySightPipe implements PipeTransform {

  transform(objects, searchBySightQuery): any {
    if(searchBySightQuery) {
      return objects.filter(object => {
        return object.title.includes(searchBySightQuery)
      })
    } else return objects
  }
}
