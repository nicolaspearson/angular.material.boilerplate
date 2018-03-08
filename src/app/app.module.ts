import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { MatIconRegistry } from '@angular/material';

import { NgsRevealModule } from 'ng-scrollreveal';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {
	StoreRouterConnectingModule,
	RouterStateSerializer
} from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { ToastrModule } from 'ngx-toastr';

import { CustomRouterStateSerializer } from '@app/utils/router-utils';
import { reducers, metaReducers } from '@app/reducers';

import { routes } from '@app/app.routes';
import { environment } from '@env/environment';

// App Component
import { AppComponent } from '@app/app.component';

// Pages
import { PageNotFoundComponent } from '@app/components/page-not-found/page-not-found.component';
import { LandingPageComponent } from '@app/features/landing/components/landing-page/landing-page.component';

// Sub Modules
import { AuthModule } from '@app/features/auth/auth.module';
import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared/shared.module';
import { LayoutModule } from '@app/features/internal/layout/layout.module';
import { DemoLayoutModule } from 'demo/demo-layout/demo-layout.module';

// Hot Module Reload (HMR)
import { removeNgStyles, createNewHosts } from '@angularclass/hmr';

@NgModule({
	declarations: [
		AppComponent,
		// Pages
		PageNotFoundComponent,
		LandingPageComponent
	],
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
		// Core
		CoreModule,
		// Features
		AuthModule.forRoot(),
		// Sub Modules
		SharedModule,
		LayoutModule,
		DemoLayoutModule,
		// 3rd Party
		NgsRevealModule.forRoot(),
		ToastrModule.forRoot({
			closeButton: false,
			timeOut: 3000,
			positionClass: 'toast-top-right',
			preventDuplicates: true,
			progressBar: true,
			progressAnimation: 'decreasing',
			newestOnTop: true,
			iconClasses: {
				error: 'toast-error',
				info: 'toast-info',
				success: 'toast-success',
				warning: 'toast-warning'
			}
		})
	],
	providers: [
		/**
		 * The `RouterStateSnapshot` provided by the `Router` is a large complex structure.
		 * A custom RouterStateSerializer is used to parse the `RouterStateSnapshot` provided
		 * by `@ngrx/router-store` to include only the desired pieces of the snapshot.
		 */
		{
			provide: RouterStateSerializer,
			useClass: CustomRouterStateSerializer
		}
	],
	bootstrap: [AppComponent]
})
export class AppModule {
	constructor(
		public appRef: ApplicationRef,
		matIconRegistry: MatIconRegistry,
		domSanitizer: DomSanitizer
	) {
		matIconRegistry
			.addSvgIcon(
				'pin',
				domSanitizer.bypassSecurityTrustResourceUrl(
					'assets/images/svg/pin.svg'
				)
			)
			.addSvgIcon(
				'pin-off',
				domSanitizer.bypassSecurityTrustResourceUrl(
					'assets/images/svg/pin-off.svg'
				)
			);
	}

	hmrOnInit(store) {
		console.log('HMR store', store);
	}
	hmrOnDestroy(store) {
		const cmpLocation = this.appRef.components.map(
			cmp => cmp.location.nativeElement
		);
		// Recreate elements
		store.disposeOldHosts = createNewHosts(cmpLocation);
		// Remove styles
		removeNgStyles();
	}
	hmrAfterDestroy(store) {
		// Display new elements
		store.disposeOldHosts();
		delete store.disposeOldHosts;
	}
}
