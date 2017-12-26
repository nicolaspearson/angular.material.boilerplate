import { Injectable } from '@angular/core';

import { environment as env } from '@env/environment';

@Injectable()
export class LocalStorageService {
	constructor() {}

	static loadInitialState() {
		return Object.keys(localStorage).reduce((state: any, storageKey) => {
			if (storageKey.includes(env.appStoragePrefix)) {
				state = state || {};
				const stateKey = storageKey
					.replace(env.appStoragePrefix, '')
					.toLowerCase()
					.split('.');
				let currentStateRef = state;
				stateKey.forEach((key, index) => {
					if (index === stateKey.length - 1) {
						currentStateRef[key] = JSON.parse(localStorage.getItem(storageKey));
						return;
					}
					currentStateRef[key] = currentStateRef[key] || {};
					currentStateRef = currentStateRef[key];
				});
			}
			return state;
		}, null);
	}

	setItem(key: string, value: any) {
		localStorage.setItem(
			`${env.appStoragePrefix}${key}`,
			JSON.stringify(value)
		);
	}

	getItem(key: string) {
		return JSON.parse(localStorage.getItem(`${env.appStoragePrefix}${key}`));
	}
}
