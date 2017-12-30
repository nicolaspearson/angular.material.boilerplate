import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
	MatAutocompleteModule,
	MatButtonModule,
	MatButtonToggleModule,
	MatCardModule,
	MatCheckboxModule,
	MatChipsModule,
	MatDatepickerModule,
	MatDialogModule,
	MatExpansionModule,
	MatGridListModule,
	MatIconModule,
	MatInputModule,
	MatListModule,
	MatMenuModule,
	MatNativeDateModule,
	MatPaginatorModule,
	MatProgressBarModule,
	MatProgressSpinnerModule,
	MatRadioModule,
	MatRippleModule,
	MatSelectModule,
	MatSidenavModule,
	MatSliderModule,
	MatSlideToggleModule,
	MatSnackBarModule,
	MatSortModule,
	MatTableModule,
	MatTabsModule,
	MatToolbarModule,
	MatTooltipModule,
	MatStepperModule
} from '@angular/material';

import { UIRoutingModule } from './ui-routing.module';

import { UIComponent } from './ui.component';
import { UIBoxesComponent } from './boxes/boxes.component';
import { UIButtonsComponent } from './buttons/buttons.component';
import { UICallToActionsComponent } from './call-to-actions/call-to-actions.component';
import { UICardsComponent } from './cards/cards.component';
import { UIColorComponent } from './color/color.component';
import { UIComponentsComponent } from './components/components.component';
import { DialogOverviewExampleDialogComponent } from './components/dialog-overview-example-dialog.component';
import { DialogResultExampleDialogComponent } from './components/dialog-result-example-dialog.component';
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

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		MatAutocompleteModule,
		MatButtonModule,
		MatButtonToggleModule,
		MatCardModule,
		MatCheckboxModule,
		MatChipsModule,
		MatDatepickerModule,
		MatDialogModule,
		MatExpansionModule,
		MatGridListModule,
		MatIconModule,
		MatInputModule,
		MatListModule,
		MatMenuModule,
		MatNativeDateModule,
		MatPaginatorModule,
		MatProgressBarModule,
		MatProgressSpinnerModule,
		MatRadioModule,
		MatRippleModule,
		MatSelectModule,
		MatSidenavModule,
		MatSliderModule,
		MatSlideToggleModule,
		MatSnackBarModule,
		MatSortModule,
		MatTableModule,
		MatTabsModule,
		MatToolbarModule,
		MatTooltipModule,
		MatStepperModule,
		UIRoutingModule
	],
	declarations: [
		UIComponent,
		UIBoxesComponent,
		UIButtonsComponent,
		UICallToActionsComponent,
		UICardsComponent,
		UIColorComponent,
		UIComponentsComponent,
		DialogOverviewExampleDialogComponent,
		DialogResultExampleDialogComponent,

		UIFeatureCalloutsComponent,
		UIGridsComponent,
		UIHoverComponent,
		UIIconBoxesComponent,
		UIIconsComponent,
		UIListsComponent,
		UIPricingTablesComponent,
		UISashesComponent,
		UITestimonialsComponent,
		UITimelineComponent,
		UITypographyComponent
	],
	entryComponents: [
		DialogOverviewExampleDialogComponent,
		DialogResultExampleDialogComponent
	]
})
export class UIModule {}
