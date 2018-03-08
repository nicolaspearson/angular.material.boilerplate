import { NgModule } from '@angular/core';

import { DateFormatPipe } from './date-format';
import { DateTimeFormatPipe } from './date-time-format';
import { EllipsisPipe } from './ellipsis';

export const PIPES = [DateFormatPipe, DateTimeFormatPipe, EllipsisPipe];

@NgModule({
	declarations: PIPES,
	exports: PIPES
})
export class PipesModule {}
