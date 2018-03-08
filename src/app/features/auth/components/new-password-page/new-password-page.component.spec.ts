import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPasswordPageComponent } from './new-password-page.component';

describe('NewPasswordPageComponent', () => {
	let component: NewPasswordPageComponent;
	let fixture: ComponentFixture<NewPasswordPageComponent>;

	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				declarations: [NewPasswordPageComponent]
			}).compileComponents();
		})
	);

	beforeEach(() => {
		fixture = TestBed.createComponent(NewPasswordPageComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
