import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {
	StoreRouterConnectingModule,
	RouterStateSerializer
} from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AuthModule } from './auth/auth.module';
import { HomeModule } from './home/home.module';
import { CoreModule } from '@app/core';
import { SharedModule } from './shared/shared.module';
import { CustomRouterStateSerializer } from './shared/utils';
import { reducers, metaReducers } from './reducers';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { routes } from './app.routes';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';

@NgModule({
	declarations: [AppComponent, PageNotFoundComponent],
	imports: [
		// Angular
		BrowserModule,
		BrowserAnimationsModule,
		CommonModule,
		HttpClientModule,
		RouterModule.forRoot(routes, {
			enableTracing: !environment.production
		}),
		/**
		 * StoreModule.forRoot is imported once in the root module, accepting a reducer
		 * function or object map of reducer functions. If passed an object of
		 * reducers, combineReducers will be run creating your application
		 * meta-reducer. This returns all providers for an @ngrx/store
		 * based application.
		 */
		StoreModule.forRoot(reducers, { metaReducers }),
		/**
		 * @ngrx/router-store keeps router state up-to-date in the store.
		 */
		StoreRouterConnectingModule,
		/**
		 * Enable Store Devtools for non production builds
		 */
		!environment.production ? StoreDevtoolsModule.instrument() : [],
		EffectsModule.forRoot([]),
		// Core & Shared
		CoreModule,
		SharedModule,
		// Features
		AuthModule.forRoot()
		// HomeModule.forRoot()
	],
	providers: [
		/**
		 * The `RouterStateSnapshot` provided by the `Router` is a large complex structure.
		 * A custom RouterStateSerializer is used to parse the `RouterStateSnapshot` provided
		 * by `@ngrx/router-store` to include only the desired pieces of the snapshot.
		 */
		{ provide: RouterStateSerializer, useClass: CustomRouterStateSerializer }
	],
	bootstrap: [AppComponent]
})
export class AppModule {}
