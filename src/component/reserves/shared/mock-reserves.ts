import {Reserve} from "./reserve.model";
import {TableStatus} from "../../tables/shared/table-status.enum";
export const RESERVES:Reserve[] =[
  {
    id:1,
    customerName:"Nguyễn Văn A",
    quantity:10,
    phone:'01626791050',
    dateTime:new Date("2017-03-01T20:44:00+07:00"),
    table:{
      id: 1, name: "Bàn 1", status: TableStatus.AVAILABLE, location: "Khu A Tầng 1"
    }
  }
];
