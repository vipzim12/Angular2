import { User } from "../users/user";

export class Order {
    id: number;
    idOrderDetail: Number;
    user : User;
    status: String;
}