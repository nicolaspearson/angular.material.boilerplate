import {
	ChangeDetectionStrategy,
	Component,
	ElementRef,
	OnInit,
	Input,
	Output,
	EventEmitter,
	ViewChild
} from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { DataSource } from '@angular/cdk/collections';
import { MatDialog, MatPaginator, MatSort } from '@angular/material';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/let';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { ToastrService } from 'ngx-toastr';

import { LayoutService } from '@app/features/internal/layout/services/layout.service';

import * as fromTables from '@app/features/internal/menu-items/tables/reducers';
import * as Tables from '@app/features/internal/menu-items/tables/actions/tables.actions';

import { StockItemDataSource } from './data-table.data-source';
import { StockItem, newStockItem } from '@app/models/stock-item';

import { AddStockItemDialogComponent } from '../../dialogs/add-stock-item-dialog/add-stock-item-dialog.component';
import { DeleteStockItemDialogComponent } from '../../dialogs/delete-stock-item-dialog/delete-stock-item-dialog.component';
import { EditStockItemDialogComponent } from '../../dialogs/edit-stock-item-dialog/edit-stock-item-dialog.component';

import { routerTransition } from '@app/core';
import { TablesEffects } from '@app/features/internal/menu-items/tables/effects/tables.effects';

@Component({
	selector: 'app-data-table',
	templateUrl: './data-table.component.html',
	changeDetection: ChangeDetectionStrategy.Default,
	styleUrls: [],
	animations: [routerTransition]
})
export class DataTableComponent implements OnInit {
	error$ = this.store.select(fromTables.getTablesPageError);

	stockItems$: Observable<StockItem[]> = this.store.select(
		fromTables.getStockItemCollection
	);

	displayedColumns = [
		'registrationNumber',
		'make',
		'model',
		'modelYear',
		'odometer',
		'colour',
		'retailPrice',
		'actions'
	];

	dataSource: StockItemDataSource | null;

	@ViewChild(MatPaginator) paginator: MatPaginator;

	@ViewChild(MatSort) sort: MatSort;

	@ViewChild('filter') filter: ElementRef;

	constructor(
		private store: Store<fromTables.State>,
		private tablesEffects: TablesEffects,
		private router: Router,
		public dialog: MatDialog,
		private toastrService: ToastrService,
		private layoutService: LayoutService
	) {
		this.stockItems$ = store.select(fromTables.getStockItemCollection);

		tablesEffects.fetchStockItems$
			.filter(action => action.type === Tables.FETCH_STOCK_ITEMS_SUCCESS)
			.subscribe((action: Tables.FetchStockItemsSuccess) => {
				this.hideLoader();
			});

		tablesEffects.fetchStockItems$
			.filter(action => action.type === Tables.FETCH_STOCK_ITEMS_FAILURE)
			.subscribe((action: Tables.FetchStockItemsFailure) => {
				this.hideLoader();
			});

		tablesEffects.addSuccess$
			.filter(action => action.type === Tables.ADD_STOCK_ITEM_SUCCESS)
			.subscribe((action: Tables.AddStockItemSuccess) => {
				this.toastrService.success('Item Added', 'Success!');
			});

		tablesEffects.addFailure$
			.filter(action => action.type === Tables.ADD_STOCK_ITEM_FAILURE)
			.subscribe((action: Tables.AddStockItemFailure) => {
				this.toastrService.error(action.payload, 'Failed!');
			});

		tablesEffects.updateSuccess$
			.filter(action => action.type === Tables.UPDATE_STOCK_ITEM_SUCCESS)
			.subscribe((action: Tables.UpdateStockItemSuccess) => {
				this.toastrService.success('Item Updated', 'Success!');
			});

		tablesEffects.updateFailure$
			.filter(action => action.type === Tables.UPDATE_STOCK_ITEM_FAILURE)
			.subscribe((action: Tables.UpdateStockItemFailure) => {
				this.toastrService.error(action.payload, 'Failed!');
			});

		tablesEffects.removeSuccess$
			.filter(action => action.type === Tables.REMOVE_STOCK_ITEM_SUCCESS)
			.subscribe((action: Tables.RemoveStockItemSuccess) => {
				this.toastrService.success('Item Removed', 'Success!');
			});

		tablesEffects.removeFailure$
			.filter(action => action.type === Tables.REMOVE_STOCK_ITEM_FAILURE)
			.subscribe((action: Tables.RemoveStockItemFailure) => {
				this.toastrService.error(action.payload, 'Failed!');
			});
	}

	ngOnInit() {
		this.dataSource = new StockItemDataSource(
			this.stockItems$,
			this.paginator,
			this.sort
		);
		this.loadData();
	}

	activateLoader() {
		this.layoutService.updatePreloaderState('active');
	}
	hideLoader() {
		this.layoutService.updatePreloaderState('hide');
	}

	applyFilter(filterValue: string) {
		// Remove whitespace
		filterValue = filterValue.trim();
		// Convert to lowercase
		filterValue = filterValue.toLowerCase();
		this.dataSource.filter = filterValue;
	}

	loadData() {
		this.activateLoader();
		this.store.dispatch(new Tables.FetchStockItems());
	}

	addItem() {
		const dialogRef = this.dialog.open(AddStockItemDialogComponent, {
			data: newStockItem()
		});

		dialogRef.afterClosed().subscribe(result => {
			if (result.state === 1) {
				this.store.dispatch(new Tables.AddStockItem(result.item));
			}
		});
	}

	editItem(index: number, stockItem: StockItem) {
		const dialogRef = this.dialog.open(EditStockItemDialogComponent, {
			data: stockItem
		});

		dialogRef.afterClosed().subscribe(result => {
			if (result.state === 1) {
				this.store.dispatch(new Tables.UpdateStockItem(result.item));
			}
		});
	}

	deleteItem(index: number, stockItem: StockItem) {
		const dialogRef = this.dialog.open(DeleteStockItemDialogComponent, {
			data: stockItem
		});

		dialogRef.afterClosed().subscribe(result => {
			if (result.state === 1) {
				this.store.dispatch(new Tables.RemoveStockItem(result.item));
			}
		});
	}
}
