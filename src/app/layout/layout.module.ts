import { NgModule } from '@angular/core';

import { LayoutRoutingModule } from './layout-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
	imports: [LayoutRoutingModule, SharedModule],
	declarations: []
})
export class LayoutModule {}
