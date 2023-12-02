import { Pipe, PipeTransform } from '@angular/core';
import { GenreInterface } from '../models/genre';

@Pipe({
  name: 'filterByName'
})
export class FilterByNamePipe implements PipeTransform {

  transform(items: GenreInterface[], search: string): GenreInterface[] {
    if (search.length === 0) return items
    return items.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
  }

}
