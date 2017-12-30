import { NgModule, ApplicationRef } from '@angular/core';
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
import { CustomRouterStateSerializer } from './shared/utils';
import { reducers, metaReducers } from './reducers';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { routes } from './app.routes';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';

// Layout
import { LayoutComponent } from './layout/layout.component';
import { PreloaderDirective } from './layout/preloader.directive';

// Header
import { AppHeaderComponent } from './layout/header/header.component';

// Sidenav
import { AppSidenavComponent } from './layout/sidenav/sidenav.component';
import { ToggleOffcanvasNavDirective } from './layout/sidenav/toggle-offcanvas-nav.directive';
import { AutoCloseMobileNavDirective } from './layout/sidenav/auto-close-mobile-nav.directive';
import { AppSidenavMenuComponent } from './layout/sidenav/sidenav-menu/sidenav-menu.component';
import { AccordionNavDirective } from './layout/sidenav/sidenav-menu/accordion-nav.directive';
import { AppendSubmenuIconDirective } from './layout/sidenav/sidenav-menu/append-submenu-icon.directive';
import { HighlightActiveItemsDirective } from './layout/sidenav/sidenav-menu/highlight-active-items.directive';

// Customizer
import { AppCustomizerComponent } from './layout/customizer/customizer.component';
import { ToggleQuickviewDirective } from './layout/customizer/toggle-quickview.directive';

// Footer
import { AppFooterComponent } from './layout/footer/footer.component';

// Search Overlay
import { AppSearchOverlayComponent } from './layout/search-overlay/search-overlay.component';
import { SearchOverlayDirective } from './layout/search-overlay/search-overlay.directive';
import { OpenSearchOverlayDirective } from './layout/search-overlay/open-search-overlay.directive';

// Pages
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageLayoutFullscreenComponent } from './page-layouts/fullscreen/fullscreen.component';

// Sub modules
import { LayoutModule } from './layout/layout.module';
import { SharedModule } from './shared/shared.module';

// Hot Module Reload (HMR)
import { removeNgStyles, createNewHosts } from '@angularclass/hmr';

@NgModule({
	declarations: [
		AppComponent,
		PageNotFoundComponent,
		// Layout
		LayoutComponent,
		PreloaderDirective,
		// Header
		AppHeaderComponent,
		// Sidenav
		AppSidenavComponent,
		ToggleOffcanvasNavDirective,
		AutoCloseMobileNavDirective,
		AppSidenavMenuComponent,
		AccordionNavDirective,
		AppendSubmenuIconDirective,
		HighlightActiveItemsDirective,
		// Customizer
		AppCustomizerComponent,
		ToggleQuickviewDirective,
		// Footer
		AppFooterComponent,
		// Search overlay
		AppSearchOverlayComponent,
		SearchOverlayDirective,
		OpenSearchOverlayDirective,
		// Dashboard
		DashboardComponent,
		// Pages
		PageLayoutFullscreenComponent
	],
	imports: [
		// Angular
		BrowserModule,
		BrowserAnimationsModule,
		CommonModule,
		HttpClientModule,
		RouterModule.forRoot(routes, {
			enableTracing: !environment.production,
			useHash: true
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
		// Sub modules
		LayoutModule,
		SharedModule
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
	constructor(public appRef: ApplicationRef) {}
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
