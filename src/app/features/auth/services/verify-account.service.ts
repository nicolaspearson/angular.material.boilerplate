import { Injectable } from '@angular/core';
import { VerifyAccount } from '@app/models/auth';

@Injectable()
export class VerifyAccountService {
	constructor() {}

	private data: VerifyAccount;

	setData(data: VerifyAccount) {
		this.data = data;
	}

	getData(): VerifyAccount {
		const temp = this.data;
		this.clearData();
		return temp;
	}

	hasData(): boolean {
		return this.data ? true : false;
	}

	clearData() {
		this.data = undefined;
	}
}
