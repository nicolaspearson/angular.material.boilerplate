import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import {
	Component,
	EventEmitter,
	Inject,
	Input,
	OnInit,
	Output
} from '@angular/core';
import {
	FormGroup,
	FormBuilder,
	FormControl,
	Validators
} from '@angular/forms';

@Component({
	selector: 'app-base-dialog-form',
	templateUrl: './base-dialog-form.component.html',
	styleUrls: []
})
export class BaseDialogFormComponent<T> {
	form: FormGroup;

	formBuilder: FormBuilder = new FormBuilder();

	formName = 'base-dialog-form';

	@Input()
	set pending(isPending: boolean) {
		if (this.form) {
			if (isPending) {
				this.form.disable();
			} else {
				this.form.enable();
			}
		}
	}

	@Input() errorMessage: string | null;

	constructor(
		public dialogRef: MatDialogRef<BaseDialogFormComponent<T>>,
		@Inject(MAT_DIALOG_DATA) public data: T | any
	) {
		// Empty Constructor
	}

	compareFn: ((item1: any, item2: any) => boolean) | null = this
		.compareByValue;

	compareByValue(item1: any, item2: any) {
		return item1 && item2 && item1.value === item2.value;
	}

	updateRequiredControl(control: string, data: any, notRequiredValue: any) {
		const requiredControl = this.form.get(`${control}`);
		// Using setValidators to add and remove validators. See issue: https://github.com/angular/angular/issues/10567
		if (data !== notRequiredValue) {
			requiredControl.setValidators([Validators.required]);
		} else {
			requiredControl.setValidators([]);
		}
		// Need to call this to trigger a update
		requiredControl.updateValueAndValidity();
	}

	applyFormChanges() {
		const formValues = sessionStorage.getItem(this.formName);
		if (formValues) {
			this.applyFormValues(this.form, JSON.parse(formValues));
		}
	}

	private applyFormValues(group, formValues) {
		Object.keys(formValues).forEach(key => {
			const formControl = <FormControl>group.controls[key];
			if (formControl) {
				if (formControl instanceof FormGroup) {
					this.applyFormValues(formControl, formValues[key]);
				} else {
					formControl.setValue(formValues[key]);
				}
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
		this.dialogRef.close({
			state: 1,
			item: this.data && this.data.item ? this.data.item : this.data
		});
	}
}
