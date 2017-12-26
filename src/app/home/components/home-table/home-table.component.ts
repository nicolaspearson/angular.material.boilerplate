import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { routerTransition } from '@app/core';

import { StockItem } from '../../models/stockItem';

@Component({
	selector: 'app-home-table',
	templateUrl: './home-table.component.html',
	styleUrls: ['./home-table.component.scss'],
	animations: [routerTransition]
})
export class HomeTableComponent implements OnInit {
	@Input() errorMessage: string | null;

	@Input() stockItems: StockItem[];

	constructor() {}

	ngOnInit() {}
}
