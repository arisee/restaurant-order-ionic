import {Dish} from "./dish.model";
import {DishStatus} from "./dish-status.enum";

export const DISHES: Dish[] = [
  {
    id: 1,
    src: "assets/image/dish/calocchungtuong.png",
    name: "Cá lóc chung tương",
    price: "100.000",
    status: DishStatus.AVAILABLE,
    categoryId: 1,
    companyId: 1
  },
  {
    id: 2,
    src: "assets/image/dish/nemrau.png",
    name: "Nem rau",
    price: "100.000",
    status: DishStatus.AVAILABLE,
    categoryId: 1,
    companyId: 1
  },
  {
    id: 3,
    src: "assets/image/dish/botchien.png",
    name: "Bột chiên",
    price: "100.000",
    status: DishStatus.NOT_AVAILABLE,
    categoryId: 2,
    companyId: 1
  },
  {
    id: 4,
    src: "assets/image/dish/tomxu.png",
    name: "Tôm xú",
    price: "100.000",
    status: DishStatus.AVAILABLE,
    categoryId: 2,
    companyId: 1
  }
];
