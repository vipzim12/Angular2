import { Product } from "../products/products";

export class OrderDetail {
    id: Number;
    product :Product ;
    quantity: Number;
    currentPrice: Number;
    customerFullName: String;
    customerEmail: String;
    customerPhone: String;
    customerAddress: String;
    paymentMethod: String;
    coupon: String;
    total: Number
    description: String;

}