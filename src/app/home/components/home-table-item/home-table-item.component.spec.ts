import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTableItemComponent } from './home-table-item.component';

describe('HomeTableItemComponent', () => {
	let component: HomeTableItemComponent;
	let fixture: ComponentFixture<HomeTableItemComponent>;

	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				declarations: [HomeTableItemComponent]
			}).compileComponents();
		})
	);

	beforeEach(() => {
		fixture = TestBed.createComponent(HomeTableItemComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
