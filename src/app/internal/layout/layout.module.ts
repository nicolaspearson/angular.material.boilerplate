import { NgModule } from '@angular/core';

import { LayoutRoutingModule } from './layout-routing.module';
import { SharedModule } from '../../shared/shared.module';

// Layout
import { LayoutComponent } from './components/layout/layout.component';
import { PreloaderDirective } from './directives/preloader.directive';

// Header
import { HeaderComponent } from './components/header/header.component';

// Sidenav
import { SidenavMenuComponent } from './components/sidenav-menu/sidenav-menu.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ToggleOffCanvasNavDirective } from './directives/toggle-offcanvas-nav.directive';
import { AutoCloseMobileNavDirective } from './directives/auto-close-mobile-nav.directive';
import { AccordionNavDirective } from './directives/accordion-nav.directive';
import { AppendSubmenuIconDirective } from './directives/append-submenu-icon.directive';
import { HighlightActiveItemsDirective } from './directives/highlight-active-items.directive';

// Customizer
import { CustomizerComponent } from './components/customizer/customizer.component';
import { ToggleQuickviewDirective } from './directives/toggle-quickview.directive';

// Pages
import { DashboardComponent } from '../dashboard/dashboard.component';

// Footer
import { FooterComponent } from './components/footer/footer.component';

// Search Overlay
import { SearchOverlayComponent } from './components/search-overlay/search-overlay.component';
import { SearchOverlayDirective } from './directives/search-overlay.directive';
import { OpenSearchOverlayDirective } from './directives/open-search-overlay.directive';

export const COMPONENTS = [
	// Layout
	LayoutComponent,
	PreloaderDirective,
	// Header
	HeaderComponent,
	// Sidenav
	SidenavComponent,
	ToggleOffCanvasNavDirective,
	AutoCloseMobileNavDirective,
	SidenavMenuComponent,
	AccordionNavDirective,
	AppendSubmenuIconDirective,
	HighlightActiveItemsDirective,
	// Customizer
	CustomizerComponent,
	ToggleQuickviewDirective,
	// Pages
	DashboardComponent,
	// Footer
	FooterComponent,
	// Search overlay
	SearchOverlayComponent,
	SearchOverlayDirective,
	OpenSearchOverlayDirective
];

@NgModule({
	imports: [LayoutRoutingModule, SharedModule],
	declarations: COMPONENTS,
	exports: COMPONENTS
})
export class LayoutModule {}
