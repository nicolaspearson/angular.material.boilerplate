import { EntityState } from '@ngrx/entity';

import { StockAccessory } from './stock-accessory';
import { StockImage } from './stock-image';

export interface StockItem {
	stockItemId: string;
	registrationNumber: string;
	make: string;
	model: string;
	modelYear: number;
	odometer: number;
	colour: string;
	vin: string;
	retailPrice: string;
	costPrice: string;
	accessories: string[];
	images: string[];
	createdAt: string;
	updatedAt: string;
	stockAccessories: StockAccessory[];
	stockImages: StockImage[];
}

export function newStockItem() {
	return {
		stockItemId: undefined,
		registrationNumber: undefined,
		make: undefined,
		model: undefined,
		modelYear: undefined,
		odometer: undefined,
		colour: undefined,
		vin: undefined,
		retailPrice: undefined,
		costPrice: undefined,
		accessories: [],
		images: [],
		createdAt: undefined,
		updatedAt: undefined,
		stockAccessories: [],
		stockImages: []
	};
}
