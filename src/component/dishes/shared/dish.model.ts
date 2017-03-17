import {DishStatus} from "./dish-status.enum";

export class Dish {
  id: number;
  categoryId: number;
  src: string;
  name: string;
  price: string;
  status: DishStatus;
  companyId: number;
}
