import { NgModule } from '@angular/core';

import { EllipsisPipe } from './ellipsis';

export const PIPES = [EllipsisPipe];

@NgModule({
	declarations: PIPES,
	exports: PIPES
})
export class PipesModule {}
