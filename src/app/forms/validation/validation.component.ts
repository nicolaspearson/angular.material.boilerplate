import { Component, OnInit } from '@angular/core';
import {
	FormGroup,
	FormBuilder,
	FormControl,
	Validators
} from '@angular/forms';

@Component({
	selector: 'app-form-validation',
	styles: [],
	templateUrl: './validation.component.html'
})
export class FormValidationComponent implements OnInit {
	validationForm: FormGroup;
	formSubmitted = false;

	constructor(private formBuilder: FormBuilder) {}
	ngOnInit() {
		this.buildForm();
	}

	buildForm() {
		this.validationForm = this.formBuilder.group({
			requiredInput: this.formBuilder.control(null, [
				Validators.required
			]),
			requiredTextarea: this.formBuilder.control(null, [
				Validators.required
			]),
			requiredMinLength: this.formBuilder.control(null, [
				Validators.required,
				Validators.minLength(3)
			]),
			requiredMaxLength: this.formBuilder.control(null, [
				Validators.required,
				Validators.maxLength(10)
			]),
			requiredMinMaxLength: this.formBuilder.control(null, [
				Validators.required,
				Validators.minLength(3),
				Validators.maxLength(10)
			]),
			requiredPatternFoo: this.formBuilder.control(null, [
				Validators.required,
				Validators.pattern(/^foo$/)
			]),
			requiredPattern: this.formBuilder.control(null, [
				Validators.required,
				Validators.pattern(/^#(?:[0-9a-fA-F]{3}){1,2}$/)
			])
		});
	}

	onResetForm() {
		this.validationForm.reset();
		this.formSubmitted = false;
	}

	onSubmit() {
		this.formSubmitted = true;
	}
}
