import {
	Component,
	ChangeDetectionStrategy,
	OnInit,
	OnDestroy
} from '@angular/core';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/map';

import * as fromHome from '../../reducers';
import * as Home from '../../actions/home.actions';
import { StockItem } from '../../models/stockItem';

import { routerTransition } from '@app/core';
import { environment as env } from '@env/environment';

@Component({
	selector: 'app-stock-item-page',
	changeDetection: ChangeDetectionStrategy.Default,
	templateUrl: './stock-item-page.component.html',
	styleUrls: ['./stock-item-page.component.scss'],
	animations: [routerTransition]
})
export class StockItemPageComponent implements OnInit, OnDestroy {
	actionsSubscription: Subscription;

	constructor(store: Store<fromHome.State>, route: ActivatedRoute) {
		this.actionsSubscription = route.params
			.map(params => new Home.SelectStockItem(params.id))
			.subscribe(store);
	}

	ngOnInit() {}

	ngOnDestroy() {
		this.actionsSubscription.unsubscribe();
	}
}
