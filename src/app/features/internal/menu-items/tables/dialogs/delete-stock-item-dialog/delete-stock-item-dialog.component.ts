import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Component, Inject } from '@angular/core';

import { BaseDialogComponent } from '@app/components/dialogs/base-dialog/base-dialog.component';

@Component({
	selector: 'app-dialog-delete-stock-item',
	templateUrl: './delete-stock-item-dialog.component.html',
	styleUrls: []
})
export class DeleteStockItemDialogComponent<T> extends BaseDialogComponent<T> {
	constructor(
		public dialogRef: MatDialogRef<DeleteStockItemDialogComponent<T>>,
		@Inject(MAT_DIALOG_DATA) public item: T
	) {
		super(dialogRef, item);
	}
}
