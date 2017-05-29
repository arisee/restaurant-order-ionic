import { Injectable } from "@angular/core";
import { RESERVES } from "./mock-reserves";
import { Reserve } from "./reserve.model";
import { Http } from "@angular/http";
@Injectable()
export class ReservesService {
  RESERVES: Array<Reserve>;

  constructor(public http: Http) {
    this.RESERVES = RESERVES;
  }

  getReserve(){
    return this.http.get('/api/reserves')
      .map(res => res.json())
  }

  create(body){
    return this.http.post('/api/reserves',body);
  }

  findByTableId(tableId : number){
    return this.http.get('/api/reserves/tableId/' + tableId)
      .map(res => res.json());
  }

  save(form) {
    let rev: Reserve = new Reserve();
    rev.table = form.table;
    rev.scheduleOn = form.scheduleOn;
    rev.customerName = form.customerName;
    rev.phone = form.phone;
    rev.quantity = form.quantity;
    this.RESERVES.push(rev);
    return this.RESERVES;
  }

  // getReserve(tableID: Number, search: string) {
  //   let rs = [];
  //
  //   this.RESERVES.forEach((reserve) => {
  //     let isFilter = false;
  //     if (tableID != null && reserve.table.id != tableID) {
  //       isFilter = true;
  //     }
  //     if (!isFilter && search != null && search.length) {
  //       if (reserve.customerName.indexOf(search) == -1) {
  //         isFilter = true;
  //       }
  //     }
  //     if (!isFilter) {
  //       rs.push(reserve);
  //     }
  //   });
  //
  //   return rs;
  // }

}
