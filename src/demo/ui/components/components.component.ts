import { Component } from '@angular/core';
import { MatSnackBar, MatDialog } from '@angular/material';
import { LayoutService } from '../../../app/layout/layout.service';
import { DialogOverviewExampleDialogComponent } from './dialog-overview-example-dialog.component';
import { DialogResultExampleDialogComponent } from './dialog-result-example-dialog.component';

@Component({
	selector: 'app-ui-components',
	styles: [],
	templateUrl: './components.component.html'
})
export class UIComponentsComponent {
	selectedOption;

	// Tooltips
	tooltipDirection = 'below';

	// Progress Bar, Spinner
	determinateValue = 30;
	determinateValue2 = 50;

	constructor(
		public snackBar: MatSnackBar,
		public dialog: MatDialog,
		private layoutService: LayoutService
	) {}

	activateLoader() {
		this.layoutService.updatePreloaderState('active');
	}
	hideLoader() {
		this.layoutService.updatePreloaderState('hide');
	}

	// SnackBar
	openSnackBar(message: string, action: string) {
		this.snackBar.open(message, action, {
			duration: 2000
		});
	}

	openDialog() {
		this.dialog.open(DialogOverviewExampleDialogComponent);
	}

	openDialogWithAResult() {
		const dialogRef = this.dialog.open(DialogResultExampleDialogComponent);
		dialogRef.afterClosed().subscribe(result => {
			this.selectedOption = result;
		});
	}
}
