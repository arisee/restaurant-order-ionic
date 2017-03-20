import {Injectable} from "@angular/core";
import {RESERVES} from "./mock-reserves";
import {Reserve} from "./reserve.model";
@Injectable()
export class ReservesService {
  RESERVES: Array<Reserve>;


  constructor() {
    this.RESERVES = RESERVES;
  }

  getReserve(tableID: Number, search: string) {
    let rs = [];

    this.RESERVES.forEach((reserve) => {
      let isFilter = false;
      if (tableID != null && reserve.table.id != tableID) {
        isFilter = true;
      }
      if (!isFilter && search != null && search.length) {
        if (reserve.customerName.indexOf(search) == -1) {
          isFilter = true;
        }
      }
      if (!isFilter) {
        rs.push(reserve);
      }
    });

    return rs;
  }

  save(form) {
    let rev: Reserve = new Reserve();
    rev.table = form.table;
    rev.dateTime = form.dateTime;
    rev.customerName = form.customerName;
    rev.phone = form.phone;
    rev.quantity = form.quantity;
    this.RESERVES.push(rev);
    return this.RESERVES;
  }

}
