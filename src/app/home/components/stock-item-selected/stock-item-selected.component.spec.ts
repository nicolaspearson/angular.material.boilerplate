import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockItemSelectedComponent } from './stock-item-selected.component';

describe('StockItemSelectedComponent', () => {
	let component: StockItemSelectedComponent;
	let fixture: ComponentFixture<StockItemSelectedComponent>;

	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				declarations: [StockItemSelectedComponent]
			}).compileComponents();
		})
	);

	beforeEach(() => {
		fixture = TestBed.createComponent(StockItemSelectedComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
