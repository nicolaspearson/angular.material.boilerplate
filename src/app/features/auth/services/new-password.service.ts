import { Injectable } from '@angular/core';
import { NewPassword } from '@app/models/auth';

@Injectable()
export class NewPasswordService {
	constructor() {}

	private data: NewPassword;

	setData(data: NewPassword) {
		this.data = data;
	}

	getData(): NewPassword {
		const temp = this.data;
		this.clearData();
		return temp;
	}

	clearData() {
		this.data = undefined;
	}
}
