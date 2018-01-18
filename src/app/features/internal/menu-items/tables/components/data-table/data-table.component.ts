import {
	Component,
	OnInit,
	Input,
	Output,
	EventEmitter,
	ChangeDetectionStrategy,
	ViewChild
} from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatTableDataSource } from '@angular/material';

import { routerTransition } from '@app/core';

import { StockItem } from '@app/models/stock-item';

@Component({
	selector: 'app-data-table',
	templateUrl: './data-table.component.html',
	styleUrls: [],
	animations: [routerTransition]
})
export class DataTableComponent implements OnInit {
	@Input() errorMessage: string | null;

	@Input() stockItems: StockItem[];

	displayedColumns = [
		'registrationNumber',
		'make',
		'model',
		'modelYear',
		'odometer',
		'colour',
		'retailPrice'
	];

	dataSource: MatTableDataSource<StockItem> | null;

	@ViewChild(MatPaginator) paginator: MatPaginator;

	constructor() {
		this.dataSource = new MatTableDataSource();
	}

	ngOnInit() {
		console.log('Stock Items: ' + this.stockItems);
		this.dataSource.data = this.stockItems;
		this.dataSource.paginator = this.paginator;
	}
}
