import {
	ChangeDetectionStrategy,
	Component,
	ElementRef,
	Input,
	OnDestroy,
	OnInit,
	ViewChild
} from '@angular/core';
import { Action, Store } from '@ngrx/store';

import { MatSort, MatSortable } from '@angular/material';

import { LayoutService } from '@app/features/internal/layout/services/layout.service';

import { BaseDataTableDataSource } from '@app/core/data-source/base-table.data-source';

import { routerTransition } from '@app/core';

import { HttpError } from '@app/models/http-error';
import { ToastrService } from 'ngx-toastr';

@Component({
	selector: 'app-base-data-table',
	templateUrl: './base-data-table.component.html',
	changeDetection: ChangeDetectionStrategy.Default,
	styleUrls: [],
	animations: [routerTransition]
})
export class BaseDataTableComponent<T> implements OnInit, OnDestroy {
	@Input() tableTitle = 'Base Data Table';

	@Input()
	tableDescription = `This is a base data table that is extended by other table components in the app.`;

	error$: Store<string>;

	public dataSource: BaseDataTableDataSource<T>;

	defaultSortColumn: string;

	defaultSortDirection: string;

	loaderList: string[] = [];

	@ViewChild('filter') filter: ElementRef;

	constructor(
		protected layoutService: LayoutService,
		protected toastrService: ToastrService
	) {
		// Empty constructor
	}

	ngOnInit() {
		if (this.error$) {
			this.error$.subscribe(
				errorMessage => {
					console.log('onNext: ', errorMessage);
				},
				error => {
					console.log('onError: ', error);
				},
				() => {
					console.log('onComplete');
				}
			);
		}
	}

	ngOnDestroy() {
		if (this.error$) {
			this.error$.complete();
		}
	}

	showActionErrorToast(toastrService, action) {
		let httpError: HttpError;
		try {
			httpError = HttpError.newHttpError(JSON.parse(action.payload));
		} catch (error) {
			httpError = undefined;
		}
		if (httpError && httpError.title && httpError.detail) {
			toastrService.error(httpError.detail, httpError.title);
		} else {
			toastrService.error(action.payload, 'Failed!');
		}
	}

	sortDefault(sort: MatSort) {
		if (this.defaultSortColumn && this.defaultSortDirection) {
			sort.sort(<MatSortable>{
				id: this.defaultSortColumn,
				start: this.defaultSortDirection
			});
		}
	}

	applyFilter(filterValue: string) {
		// Remove whitespace
		filterValue = filterValue.trim();
		// Convert to lowercase
		filterValue = filterValue.toLowerCase();
		this.dataSource.filter = filterValue;
	}

	refreshTable() {
		if (this.dataSource._paginator.hasNextPage()) {
			// Use the paginator to force a refresh
			this.dataSource._paginator.nextPage();
			this.dataSource._paginator.previousPage();
		} else if (this.dataSource._paginator.hasPreviousPage()) {
			// On the last page reverse the logic to refresh
			this.dataSource._paginator.previousPage();
			this.dataSource._paginator.nextPage();
		} else {
			// In all other cases use the filter to refresh
			this.dataSource.filter = '';
			this.dataSource.filter = this.filter.nativeElement.value;
		}
	}

	dispatchStoreAction(store: Store<any>, action: Action) {
		this.loaderList.push(action.type);
		store.dispatch(action);
	}

	activateLoader() {
		this.layoutService.updatePreloaderState('active');
	}

	hideLoader(isPrimary: boolean = false, actionError?: any) {
		// Only dismiss the loader once all data has been loaded
		if (this.loaderList.length === 1) {
			this.loaderList.pop();
			this.layoutService.updatePreloaderState('hide');
		} else {
			this.loaderList.pop();
		}
		// Dismiss the table spinner when the primary table data has been loaded
		if (isPrimary && this.dataSource) {
			this.dataSource.loadingSubject.next(false);
		}
		if (actionError) {
			this.showActionErrorToast(this.toastrService, actionError);
		}
	}
}
