import {Order} from "./order.model";
import {TableStatus} from "../../tables/shared/table-status.enum";
import {OrderStatus} from "./order-status.enum";
import {DishStatus} from "../../dishes/shared/dish-status.enum";
export const ORDERS: Order[] = [
  {
    id: 1,
    orderItem: [
      {
        id: 1,
        dish: {
          id: 1,
          src: "assets/image/dish/calocchungtuong.png",
          name: "Cá lóc chung tương",
          price: "100.000",
          status: DishStatus.AVAILABLE,
          categoryId: 1,
          companyId: 1
        },
        description: 'Không cay',
        quantity: 5
      },
      {
        id: 2,
        dish: {
          id: 3,
          src: "assets/image/dish/botchien.png",
          name: "Bột chiên",
          price: "100.000",
          status: DishStatus.NOT_AVAILABLE,
          categoryId: 2,
          companyId: 1
        },
        description: 'Không cay',
        quantity: 5
      }
    ],
    userId: 1,
    table: {
      id: 1, name: "Bàn 1", status: TableStatus.AVAILABLE, location: "Khu A Tầng 1"
    },
    customerName: "Trần Ngọc Huy",
    dateTime: new Date("2017-03-01T20:44:00+07:00"),
    status: OrderStatus.AVAILABLE
  },
  {
    id: 2,
    orderItem: [{
      id: 3,
      dish: {
        id: 2,
        src: "assets/image/dish/nemrau.png",
        name: "Nem rau",
        price: "100.000",
        status: DishStatus.AVAILABLE,
        categoryId: 1,
        companyId: 1
      },
      description: 'Không cay',
      quantity: 5
    }],
    userId: 2,
    table: {
      id: 2, name: "Bàn 2", status: TableStatus.AVAILABLE, location: "Khu B Tầng 1"
    },
    customerName: "Nguyễn Văn A",
    dateTime: new Date("2017-03-01T20:44:00+07:00"),
    status: OrderStatus.NOT_AVAILABLE
  }
]
