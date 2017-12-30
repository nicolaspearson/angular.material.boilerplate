import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';

// openDialogWithAResult
@Component({
	selector: 'app-dialog-result-example-dialog',
	template: `<h1 md-dialog-title style="font-size: 20px;">Dialog</h1>
    <div md-dialog-content style="padding-bottom: 20px;">What would you like to do?</div>
    <div md-dialog-actions>
      <button mat-button (click)="dialogRef.close('Option 1')">Option 1</button>
      <button mat-button (click)="dialogRef.close('Option 2')">Option 2</button>
    </div>`
})
export class DialogResultExampleDialogComponent {
	constructor(
		public dialogRef: MatDialogRef<DialogResultExampleDialogComponent>
	) {}
}
