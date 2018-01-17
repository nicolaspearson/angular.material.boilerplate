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
