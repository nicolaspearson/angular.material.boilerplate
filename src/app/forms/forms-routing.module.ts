import { Routes, RouterModule } from '@angular/router';

import { FormsComponent } from './forms.component';

// import { FormCheckboxComponent } from './checkbox/checkbox.component';
// import { FormChipsComponent } from './chips/chips.component';
// import { FormInputComponent } from './input/input.component';
// import { FormRadioButtonComponent } from './radio-button/radio-button.component';
// import { FormSelectComponent } from './select/select.component';
// import { FormSlideToggleComponent } from './slide-toggle/slide-toggle.component';
// import { FormSliderComponent } from './slider/slider.component';

import { FormComponentsComponent } from './components.component';
import { FormLayoutsComponent } from './layouts/layouts.component';
import { FormValidationComponent } from './validation/validation.component';

export const FormsRoutes: Routes = [
	{
		path: '',
		component: FormsComponent,
		children: [
			{ path: '', redirectTo: '/app/dashboard', pathMatch: 'full' },
			// { path: 'input', component: FormInputComponent },
			// { path: 'checkbox', component: FormCheckboxComponent },
			// { path: 'radio-button', component: FormRadioButtonComponent },
			// { path: 'chips', component: FormChipsComponent },
			// { path: 'select', component: FormSelectComponent },
			// { path: 'slide-toggle', component: FormSlideToggleComponent },
			// { path: 'slider', component: FormSliderComponent },
			{ path: 'components', component: FormComponentsComponent },
			{ path: 'layouts', component: FormLayoutsComponent },
			{ path: 'validation', component: FormValidationComponent }
		]
	}
];

export const FormsRoutingModule = RouterModule.forChild(FormsRoutes);
