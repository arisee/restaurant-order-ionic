import {Injectable} from "@angular/core";
import {RESERVES} from "./mock-reserves";
import {Reserve} from "./reserve.model";
@Injectable()
export class ReservesService {
  RESERVES: Array<Reserve>;


  constructor() {
    this.RESERVES = RESERVES;
  }

  getReserve() {
    return Promise.resolve(this.RESERVES);
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
