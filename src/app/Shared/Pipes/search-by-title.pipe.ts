import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchByTitle'
})
export class SearchByTitlePipe implements PipeTransform {

  transform(objects, searchTitle): any {
    return objects.filter(object => {
      return object.title.toLowerCase().includes(searchTitle.toLowerCase())
    })
  }

}
