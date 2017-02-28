import {Injectable} from "@angular/core";
import {TABLES} from "./mock-table";

@Injectable()
export class TableService {
  constructor() {
  }

  getTables() {
    return Promise.resolve(TABLES); // Rerurn về promise ( Thành công, Thất bại, Chắp vá )
  }
}
