import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { StockItem } from '@app/models/stock-item';

import { BaseDialogFormComponent } from '@app/components/dialogs/base-dialog-form/base-dialog-form.component';

@Component({
	selector: 'app-dialog-add-stock-item',
	templateUrl: './add-stock-item-dialog.component.html',
	styleUrls: []
})
export class AddStockItemDialogComponent<T>
	extends BaseDialogFormComponent<StockItem>
	implements OnInit {
	constructor(
		public dialogRef: MatDialogRef<AddStockItemDialogComponent<StockItem>>,
		@Inject(MAT_DIALOG_DATA) public item: StockItem
	) {
		super(dialogRef, item);
		this.formName = 'form-add-stock-item';
	}

	ngOnInit() {
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
		this.applyFormChanges();
		this.saveFormChanges();
	}

	public onSubmitClick(): void {
		if (this.form.valid) {
			this.destroyFormChanges();
			const stockItem: StockItem = this.form.value;
			stockItem.accessories = [];
			stockItem.images = ['59f462d9f14bef54278d6369']; // Hard-coded for testing
			this.dialogRef.close({ state: 1, item: stockItem });
		}
	}

	get id() {
		return this.item.stockItemId;
	}

	get registrationNumber() {
		return this.item.registrationNumber;
	}

	get make() {
		return this.item.make;
	}

	get model() {
		return this.item.model;
	}

	get modelYear() {
		return this.item.modelYear;
	}

	get odometer() {
		return this.item.odometer;
	}

	get colour() {
		return this.item.colour;
	}

	get vin() {
		return this.item.vin;
	}

	get retailPrice() {
		return this.item.retailPrice;
	}

	get costPrice() {
		return this.item.costPrice;
	}

	get accessories() {
		return this.item.accessories;
	}

	get images() {
		return this.item.images;
	}

	get createdAt() {
		return this.item.createdAt;
	}

	get updatedAt() {
		return this.item.updatedAt;
	}

	get thumbnail(): string | boolean {
		if (this.item.stockImages && this.item.stockImages.length > 0) {
			return 'data:image/png;base64,' + this.item.stockImages[0].image;
		}
		return false;
	}
}
