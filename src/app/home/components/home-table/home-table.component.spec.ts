import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTableComponent } from './home-table.component';

describe('HomeTableComponent', () => {
	let component: HomeTableComponent;
	let fixture: ComponentFixture<HomeTableComponent>;

	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				declarations: [HomeTableComponent]
			}).compileComponents();
		})
	);

	beforeEach(() => {
		fixture = TestBed.createComponent(HomeTableComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
