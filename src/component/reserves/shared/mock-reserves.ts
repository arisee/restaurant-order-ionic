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
  },
  {
    id:5  ,
    customerName:"Nguyễn Văn E",
    quantity:10,
    phone:'01626791050',
    dateTime:new Date("2017-03-01T20:44:00+07:00"),
    table:{
      id: 1, name: "Bàn 5", status: TableStatus.AVAILABLE, location: "Khu C Tầng 2"
    }
  }
  ,{
    id:2,
    customerName:"Nguyễn Văn B",
    quantity:3,
    phone:'0938130683',
    dateTime:new Date("2017-03-01T20:44:00+07:00"),
    table:{
      id: 2, name: "Bàn 2", status: TableStatus.AVAILABLE, location: "Khu A Tầng 3"
    }
  },{
    id:3,
    customerName:"Nguyễn Văn C",
    quantity:2,
    phone:'0903021986',
    dateTime:new Date("2017-03-01T20:44:00+07:00"),
    table:{
      id: 3, name: "Bàn 1", status: TableStatus.AVAILABLE, location: "Khu A Tầng 1"
    }
  }
];
