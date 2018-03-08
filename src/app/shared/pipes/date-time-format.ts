import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

import { Constants } from '@app/utils/constants';

@Pipe({
	name: 'dateTimeFormat'
})
export class DateTimeFormatPipe extends DatePipe implements PipeTransform {
	transform(value: any, args?: any): any {
		return super.transform(value, Constants.DATE_TIME_FMT);
	}
}
