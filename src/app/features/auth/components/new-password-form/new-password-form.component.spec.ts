import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPasswordFormComponent } from './new-password-form.component';

describe('NewPasswordFormComponent', () => {
	let component: NewPasswordFormComponent;
	let fixture: ComponentFixture<NewPasswordFormComponent>;

	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				declarations: [NewPasswordFormComponent]
			}).compileComponents();
		})
	);

	beforeEach(() => {
		fixture = TestBed.createComponent(NewPasswordFormComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
