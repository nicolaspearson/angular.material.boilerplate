import { NgModule } from '@angular/core';

import { DemoLayoutRoutingModule } from './demo-layout-routing.module';
import { SharedModule } from '../../app/shared/shared.module';

// Layout
import { DemoLayoutComponent } from './components/demo-layout/demo-layout.component';
import { PreloaderDirective } from './directives/preloader.directive';

// Header
import { HeaderComponent } from './components/header/header.component';

// Sidenav
import { SidenavMenuComponent } from './components/sidenav-menu/sidenav-menu.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ToggleOffcanvasNavDirective } from './directives/toggle-offcanvas-nav.directive';
import { AutoCloseMobileNavDirective } from './directives/auto-close-mobile-nav.directive';
import { AccordionNavDirective } from './directives/accordion-nav.directive';
import { AppendSubmenuIconDirective } from './directives/append-submenu-icon.directive';
import { HighlightActiveItemsDirective } from './directives/highlight-active-items.directive';

// Customizer
import { CustomizerComponent } from './components/customizer/customizer.component';
import { ToggleQuickviewDirective } from './directives/toggle-quickview.directive';

// Footer
import { FooterComponent } from './components/footer/footer.component';

// Search Overlay
import { SearchOverlayComponent } from './components/search-overlay/search-overlay.component';
import { SearchOverlayDirective } from './directives/search-overlay.directive';
import { OpenSearchOverlayDirective } from './directives/open-search-overlay.directive';

export const COMPONENTS = [
	// Layout
	DemoLayoutComponent,
	PreloaderDirective,
	// Header
	HeaderComponent,
	// Sidenav
	SidenavComponent,
	ToggleOffcanvasNavDirective,
	AutoCloseMobileNavDirective,
	SidenavMenuComponent,
	AccordionNavDirective,
	AppendSubmenuIconDirective,
	HighlightActiveItemsDirective,
	// Customizer
	CustomizerComponent,
	ToggleQuickviewDirective,
	// Footer
	FooterComponent,
	// Search overlay
	SearchOverlayComponent,
	SearchOverlayDirective,
	OpenSearchOverlayDirective
];

@NgModule({
	imports: [DemoLayoutRoutingModule, SharedModule],
	declarations: COMPONENTS,
	exports: COMPONENTS
})
export class DemoLayoutModule {}
