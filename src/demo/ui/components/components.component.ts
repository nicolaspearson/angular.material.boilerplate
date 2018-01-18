import { Component } from '@angular/core';
import { MatSnackBar, MatDialog } from '@angular/material';
import { DemoLayoutService } from 'demo/demo-layout/services/demo-layout.service';
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
		private demoLayoutService: DemoLayoutService
	) {}

	activateLoader() {
		this.demoLayoutService.updatePreloaderState('active');
	}
	hideLoader() {
		this.demoLayoutService.updatePreloaderState('hide');
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
