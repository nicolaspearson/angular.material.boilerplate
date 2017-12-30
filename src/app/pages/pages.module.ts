import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';

import { PageAboutComponent } from './about/about.component';
import { PageBlogComponent } from './blog/blog.component';
import { PageCareersComponent } from './careers/careers.component';
import { PageContactComponent } from './contact/contact.component';
import { PageFaqsComponent } from './faqs/faqs.component';
import { PageServicesComponent } from './services/services.component';
import { PageTermsComponent } from './terms/terms.component';

@NgModule({
	imports: [
		CommonModule,
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
		PagesRoutingModule
	],
	declarations: [
		PagesComponent,
		PageAboutComponent,
		PageBlogComponent,
		PageCareersComponent,
		PageContactComponent,
		PageFaqsComponent,
		PageServicesComponent,
		PageTermsComponent
	]
})
export class PagesModule {}
