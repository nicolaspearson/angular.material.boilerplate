import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockItemPageComponent } from './stock-item-page.component';

describe('StockItemPageComponent', () => {
	let component: StockItemPageComponent;
	let fixture: ComponentFixture<StockItemPageComponent>;

	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				declarations: [StockItemPageComponent]
			}).compileComponents();
		})
	);

	beforeEach(() => {
		fixture = TestBed.createComponent(StockItemPageComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
