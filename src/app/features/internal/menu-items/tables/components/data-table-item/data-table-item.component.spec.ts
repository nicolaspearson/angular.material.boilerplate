import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataTableItemComponent } from './data-table-item.component';

describe('DataTableItemComponent', () => {
	let component: DataTableItemComponent;
	let fixture: ComponentFixture<DataTableItemComponent>;

	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				declarations: [DataTableItemComponent]
			}).compileComponents();
		})
	);

	beforeEach(() => {
		fixture = TestBed.createComponent(DataTableItemComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
