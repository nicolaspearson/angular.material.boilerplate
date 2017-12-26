import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { LocalStorageService } from './local-storage/local-storage.service';

export function getInitialState() {
	return LocalStorageService.loadInitialState();
}

@NgModule({
	imports: [
		// Angular
		CommonModule,
		HttpClientModule
	],
	declarations: [],
	providers: [LocalStorageService]
})
export class CoreModule {
	constructor(
		@Optional()
		@SkipSelf()
		parentModule: CoreModule
	) {
		if (parentModule) {
			throw new Error('CoreModule is already loaded. Import only in AppModule');
		}
	}
}
