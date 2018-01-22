import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
	selector: 'app-dialog-base',
	templateUrl: './base-dialog.component.html',
	styleUrls: []
})
export class BaseDialogComponent<T> implements OnInit {
	form: FormGroup;

	formBuilder: FormBuilder = new FormBuilder();

	constructor(
		public dialogRef: MatDialogRef<BaseDialogComponent<T>>,
		@Inject(MAT_DIALOG_DATA) public item: T
	) {}

	ngOnInit() {}

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
