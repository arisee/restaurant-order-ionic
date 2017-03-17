import {Pipe, PipeTransform} from "@angular/core";
import {Table} from "../shared/table.model";
@Pipe({
  name: 'searchNamePipe'
})

export class TablesSearchNamePipe implements PipeTransform {
  transform(tables: Array<Table>, keyString: string) {
    let rs = [];
    if (tables != null) {
      if (keyString != null && keyString.trim() != "") {
        rs = tables.filter((table) => {
          return table.name.toLowerCase().indexOf(keyString.toLowerCase()) > -1
        })
      } else {
        rs = tables;
      }
    } else {
      console.log('tables is null');
    }
    return rs;
  }
}
