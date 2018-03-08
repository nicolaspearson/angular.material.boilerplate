import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { EChartsDirective } from './directives/echarts.directive';
import { FileSelectDirective } from './directives/file-select.directive';
import { OnlyNumbersDirective } from './directives/only-numbers.directive';
import { SlimScrollDirective } from './directives/slim-scroll.directive';

// Reusable components
import { LogoComponent } from '@app/components/logo/logo.component';

// Base Components
import { BaseDialogFormComponent } from '@app/components/dialogs/base-dialog-form/base-dialog-form.component';
import { BaseDataTableComponent } from '@app/components/tables/base-data-table/base-data-table.component';

// Material Time Picker
import { MaterialTimeControlModule } from '@app/controls/material-time-control/material-time-control.module';

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
	MatFormFieldModule,
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

export const COMPONENTS = [
	CommonModule,
	FormsModule,
	ReactiveFormsModule,
	HttpModule,
	// Material Angular Components
	MatAutocompleteModule,
	MatButtonModule,
	MatButtonToggleModule,
	MatCardModule,
	MatCheckboxModule,
	MatChipsModule,
	MatDatepickerModule,
	MatDialogModule,
	MatExpansionModule,
	MatFormFieldModule,
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
	MaterialTimeControlModule
];

@NgModule({
	imports: COMPONENTS,
	declarations: [
		// Reusable Components
		LogoComponent,
		// Directives
		EChartsDirective,
		FileSelectDirective,
		OnlyNumbersDirective,
		SlimScrollDirective,
		// Base Components
		BaseDialogFormComponent,
		BaseDataTableComponent
	],
	exports: [
		...COMPONENTS,
		// Reusable Components
		LogoComponent,
		// Directives
		EChartsDirective,
		FileSelectDirective,
		OnlyNumbersDirective,
		SlimScrollDirective,
		// Base Components
		BaseDialogFormComponent,
		BaseDataTableComponent
	]
})
export class SharedModule {}
