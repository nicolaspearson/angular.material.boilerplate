export default class User {
	public id: number;
	public username: string;
	public emailAddress: string;
	public password: string;
	public enabled: boolean;
	public lastLoggedInAt: Date;
	public createdAt: Date;
	public updatedAt: Date;

	public static newUser(obj: {
		id?: number;
		username?: string;
		emailAddress?: string;
		password?: string;
		enabled?: boolean;
		lastLoggedInAt?: Date;
	}) {
		const newUser = new User();
		if (obj.id) {
			newUser.id = obj.id;
		}
		if (obj.username) {
			newUser.username = obj.username;
		}
		if (obj.emailAddress) {
			newUser.emailAddress = obj.emailAddress;
		}
		if (obj.password) {
			newUser.password = obj.password;
		}
		if (obj.enabled) {
			newUser.enabled = obj.enabled;
		}
		if (obj.lastLoggedInAt) {
			newUser.lastLoggedInAt = obj.lastLoggedInAt;
		}
		return newUser;
	}
}
