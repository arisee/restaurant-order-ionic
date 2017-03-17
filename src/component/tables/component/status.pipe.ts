import {Pipe, PipeTransform} from "@angular/core";
import {Table} from "../shared/table.model";
@Pipe({
  name:'statusPipe'
})

export class TablesStatusPipe implements PipeTransform{
  transform(tables: Array<Table>,args){
    let rs = [];
    let status = args[0];
    if(tables != null){
      console.log('status pipe table');
      tables.forEach((table) =>{
        if(status == null || table.status == status){
          rs.push(table);
        }
      });
    }else{
      console.log('tables is null');
    }
    return rs;
  }
}
