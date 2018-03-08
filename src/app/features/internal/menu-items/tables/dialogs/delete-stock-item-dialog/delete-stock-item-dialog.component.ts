import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Component, Inject } from '@angular/core';

import { BaseDialogFormComponent } from '@app/components/dialogs/base-dialog-form/base-dialog-form.component';

@Component({
	selector: 'app-dialog-delete-stock-item',
	templateUrl: './delete-stock-item-dialog.component.html',
	styleUrls: []
})
export class DeleteStockItemDialogComponent<T> extends BaseDialogFormComponent<
	T
> {
	constructor(
		public dialogRef: MatDialogRef<DeleteStockItemDialogComponent<T>>,
		@Inject(MAT_DIALOG_DATA) public item: T
	) {
		super(dialogRef, item);
	}
}
