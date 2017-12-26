import 'rxjs/add/operator/take';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/let';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { HomeService } from './home.service';
import * as fromHome from '../reducers';
import * as Home from '../actions/home.actions';

/**
 * Guards are hooks into the route resolution process, providing an opportunity
 * to inform the router's navigation process whether the route should continue
 * to activate this route. Guards must return an observable of true or false.
 */
@Injectable()
export class StockItemExistsGuard implements CanActivate {
	constructor(
		private store: Store<fromHome.State>,
		private homeService: HomeService,
		private router: Router
	) {}

	waitForCollectionToLoad(): Observable<boolean> {
		return this.store
			.select(fromHome.getCollectionLoaded)
			.filter(loaded => loaded)
			.take(1);
	}

	hasStockItemInStore(id: string): Observable<boolean> {
		return this.store
			.select(fromHome.getStockItemEntities)
			.map(entities => !!entities[id])
			.take(1);
	}

	hasStockItemInApi(id: string): Observable<boolean> {
		return this.homeService
			.retrieveStockItem(id)
			.map(stockItemEntity => new Home.Load(stockItemEntity))
			.do((action: Home.Load) => this.store.dispatch(action))
			.map(stockItem => !!stockItem)
			.catch(() => {
				this.router.navigate(['/404']);
				return of(false);
			});
	}

	hasStockItem(id: string): Observable<boolean> {
		return this.hasStockItemInStore(id).switchMap(inStore => {
			if (inStore) {
				return of(inStore);
			}

			return this.hasStockItemInApi(id);
		});
	}

	canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
		return this.waitForCollectionToLoad().switchMap(() =>
			this.hasStockItem(route.params['id'])
		);
	}
}
