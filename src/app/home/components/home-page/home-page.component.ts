import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/let';

import * as fromHome from '../../reducers';
import * as Home from '../../actions/home.actions';
import { StockItem } from '../../models/stockItem';
import { Router } from '@angular/router';

import { routerTransition } from '@app/core';
import { environment as env } from '@env/environment';

@Component({
	selector: 'app-home-page',
	changeDetection: ChangeDetectionStrategy.Default,
	templateUrl: './home-page.component.html',
	styleUrls: ['./home-page.component.scss'],
	animations: [routerTransition]
})
export class HomePageComponent implements OnInit {
	error$ = this.store.select(fromHome.getHomePageError);

	stockItems$: Observable<StockItem[]> = this.store.select(
		fromHome.getStockItemCollection
	);

	constructor(private store: Store<fromHome.State>, private router: Router) {
		this.stockItems$ = store.select(fromHome.getStockItemCollection);
	}

	ngOnInit() {
		this.store.dispatch(new Home.FetchStockItems());
	}

	createStockItem() {
		this.router.navigate(['/items', 'new']);
	}
}
