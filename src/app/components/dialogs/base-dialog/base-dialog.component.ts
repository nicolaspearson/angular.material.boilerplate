import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Component, Inject } from '@angular/core';
import {
	FormGroup,
	FormBuilder,
	FormControl,
	Validators
} from '@angular/forms';

@Component({
	selector: 'app-dialog-base',
	templateUrl: './base-dialog.component.html',
	styleUrls: []
})
export class BaseDialogComponent<T> {
	form: FormGroup;

	formBuilder: FormBuilder = new FormBuilder();

	formName = 'base-form';

	constructor(
		public dialogRef: MatDialogRef<BaseDialogComponent<T>>,
		@Inject(MAT_DIALOG_DATA) public item: T
	) {}

	applyFormChanges() {
		const formValues = sessionStorage.getItem(this.formName);
		if (formValues) {
			this.applyFormValues(this.form, JSON.parse(formValues));
		}
	}

	private applyFormValues(group, formValues) {
		Object.keys(formValues).forEach(key => {
			const formControl = <FormControl>group.controls[key];
			if (formControl instanceof FormGroup) {
				this.applyFormValues(formControl, formValues[key]);
			} else {
				formControl.setValue(formValues[key]);
			}
		});
	}

	saveFormChanges() {
		this.form.valueChanges.subscribe(form => {
			sessionStorage.setItem(this.formName, JSON.stringify(form));
		});
	}

	destroyFormChanges() {
		sessionStorage.removeItem(this.formName);
	}

	getRequiredErrorMessage() {
		return this.form && this.form.hasError('required')
			? 'Required field'
			: '';
	}

	getEmailErrorMessage() {
		return this.form && this.form.hasError('email')
			? 'Not a valid email address'
			: '';
	}

	submit() {
		// No op
	}

	public onCancelClick(): void {
		this.dialogRef.close({ state: 0 });
	}

	public onSubmitClick(): void {
		this.dialogRef.close({ state: 1, item: this.item });
	}
}
