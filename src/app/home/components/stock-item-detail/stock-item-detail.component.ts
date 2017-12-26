import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { routerTransition } from '@app/core';

import { LocalStorageService } from '../../../core/local-storage/local-storage.service';
import { LS_USER_KEY } from '../../../core/local-storage/keys';
import { User } from '../../../auth/models/user';
import { StockItem } from '../../models/stockItem';
import { environment } from '../../../../environments/environment';

@Component({
	selector: 'app-stock-item-detail',
	templateUrl: './stock-item-detail.component.html',
	styleUrls: ['./stock-item-detail.component.scss'],
	animations: [routerTransition]
})
export class StockItemDetailComponent implements OnInit {
	@Input() stockItem: StockItem;
	@Input() inCollection: boolean;
	@Input() errorMessage: string | null;
	@Output() add = new EventEmitter<StockItem>();
	@Output() remove = new EventEmitter<StockItem>();
	@Output() update = new EventEmitter<StockItem>();

	imageUploadHeaders: { [name: string]: any };

	isCreate: boolean;

	form: FormGroup;

	uploadUrl = `${environment.api.endpoint}/stockImages`;

	imageUploadStyle = {
		selectButton: {
			'background-color': '#bf1e5b',
			'border-radius': '4px',
			color: '#FFF',
			'box-shadow': 'none'
		},
		clearButton: {
			'background-color': '#000',
			'border-radius': '4px',
			color: '#FFFFFF',
			'margin-left': '10px',
			'box-shadow': 'none'
		},
		layout: {
			'align-items': 'center',
			'justify-content': 'center',
			'background-color': '#424242',
			'border-radius': '25px',
			color: '#FFF',
			'font-size': '10px',
			margin: '10px',
			'padding-top': '5px'
		},
		previewPanel: {
			'background-color': '#424242',
			'border-radius': '0 0 25px 25px'
		}
	};

	constructor(
		private formBuilder: FormBuilder,
		private localStorageService: LocalStorageService
	) {
		const result = this.localStorageService.getItem(LS_USER_KEY);
		if (result && result.user && result.user.token) {
			this.imageUploadHeaders = {
				Authorization: `Bearer ${result.user.token}`
			};
		}
	}

	ngOnInit() {
		if (this.stockItem.stockItemId === 'new') {
			this.isCreate = true;
		}

		this.form = this.formBuilder.group({
			registrationNumber: [this.registrationNumber, Validators.required],
			make: [this.make, Validators.required],
			model: [this.model, Validators.required],
			modelYear: [this.modelYear, Validators.required],
			odometer: [this.odometer, Validators.required],
			colour: [this.colour, Validators.required],
			vin: [this.vin, Validators.required],
			retailPrice: [this.retailPrice, Validators.required],
			costPrice: [this.costPrice, Validators.required]
		});
	}

	submitUpdate() {
		if (this.form.valid) {
			const stockItem: StockItem = this.form.value;
			stockItem.accessories = this.stockItem.accessories;
			stockItem.images = this.stockItem.images;
			if (!this.isCreate) {
				stockItem.stockItemId = this.stockItem.stockItemId;
			}
			if (this.isCreate) {
				this.add.emit(stockItem);
			} else {
				this.update.emit(stockItem);
			}
		}
	}

	onUploadFinished(file: any) {
		if (file && file.serverResponse && file.serverResponse._body) {
			const body = JSON.parse(file.serverResponse._body);
			if (body && body.data && body.data.stockImageId) {
				this.images.push(body.data.stockImageId);
			}
		}
	}

	onRemoved(file: any) {
		if (file && file.serverResponse && file.serverResponse._body) {
			const body = JSON.parse(file.serverResponse._body);
			if (body && body.data && body.data.stockImageId) {
				const stockImageId = body.data.stockImageId;
				const index = this.images.indexOf(stockImageId);
				if (index > -1) {
					this.images.splice(index, 1);
				}
			}
		}
	}

	get id() {
		return this.stockItem.stockItemId;
	}

	get registrationNumber() {
		return this.stockItem.registrationNumber;
	}

	get make() {
		return this.stockItem.make;
	}

	get model() {
		return this.stockItem.model;
	}

	get modelYear() {
		return this.stockItem.modelYear;
	}

	get odometer() {
		return this.stockItem.odometer;
	}

	get colour() {
		return this.stockItem.colour;
	}

	get vin() {
		return this.stockItem.vin;
	}

	get retailPrice() {
		return this.stockItem.retailPrice;
	}

	get costPrice() {
		return this.stockItem.costPrice;
	}

	get accessories() {
		return this.stockItem.accessories;
	}

	get images() {
		return this.stockItem.images;
	}

	get createdAt() {
		return this.stockItem.createdAt;
	}

	get updatedAt() {
		return this.stockItem.updatedAt;
	}

	get thumbnail(): string | boolean {
		if (this.stockItem.stockImages && this.stockItem.stockImages.length > 0) {
			return 'data:image/png;base64,' + this.stockItem.stockImages[0].image;
		}
		return false;
	}
}
