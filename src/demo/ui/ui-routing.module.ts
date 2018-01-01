import { Routes, RouterModule } from '@angular/router';

import { UIComponent } from './ui.component';

import { UIBoxesComponent } from './boxes/boxes.component';
import { UIButtonsComponent } from './buttons/buttons.component';
import { UICallToActionsComponent } from './call-to-actions/call-to-actions.component';
import { UICardsComponent } from './cards/cards.component';
import { UIColorComponent } from './color/color.component';
import { UIComponentsComponent } from './components/components.component';
import { UIFeatureCalloutsComponent } from './feature-callouts/feature-callouts.component';
import { UIGridsComponent } from './grids/grids.component';
import { UIHoverComponent } from './hover/hover.component';
import { UIIconBoxesComponent } from './icon-boxes/icon-boxes.component';
import { UIIconsComponent } from './icons/icons.component';
import { UIListsComponent } from './lists/lists.component';
import { UIPricingTablesComponent } from './pricing-tables/pricing-tables.component';
import { UISashesComponent } from './sashes/sashes.component';
import { UITestimonialsComponent } from './testimonials/testimonials.component';
import { UITimelineComponent } from './timeline/timeline.component';
import { UITypographyComponent } from './typography/typography.component';

export const UIRoutes: Routes = [
	{
		path: '',
		component: UIComponent,
		children: [
			{ path: '', redirectTo: '/demo/dashboard', pathMatch: 'full' },
			{ path: 'boxes', component: UIBoxesComponent },
			{ path: 'buttons', component: UIButtonsComponent },
			{ path: 'call-to-actions', component: UICallToActionsComponent },
			{ path: 'cards', component: UICardsComponent },
			{ path: 'color', component: UIColorComponent },
			{ path: 'components', component: UIComponentsComponent },
			{ path: 'feature-callouts', component: UIFeatureCalloutsComponent },
			{ path: 'grids', component: UIGridsComponent },
			{ path: 'hover', component: UIHoverComponent },
			{ path: 'icon-boxes', component: UIIconBoxesComponent },
			{ path: 'icons', component: UIIconsComponent },
			{ path: 'lists', component: UIListsComponent },
			{ path: 'pricing-tables', component: UIPricingTablesComponent },
			{ path: 'sashes', component: UISashesComponent },
			{ path: 'testimonials', component: UITestimonialsComponent },
			{ path: 'timeline', component: UITimelineComponent },
			{ path: 'typography', component: UITypographyComponent }
		]
	}
];

export const UIRoutingModule = RouterModule.forChild(UIRoutes);
