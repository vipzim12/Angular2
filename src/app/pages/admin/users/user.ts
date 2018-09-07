import { Role } from "./role";

export class User {
	id: Number;
	username: String;
	password: String;
	role = new Role();
	fullName: String;
	email: String;
	address: String;
	phone: String;
}
