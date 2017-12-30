import { Component, AfterViewInit } from '@angular/core';

@Component({
	selector: 'app-ecommerce-invoice',
	styles: [],
	templateUrl: './invoice.component.html'
})
export class ECommerceInvoiceComponent implements AfterViewInit {
	printContents;
	popupWin;

	ngAfterViewInit() {
		this.printContents = document.getElementById('invoice').innerHTML;
		const originalContents = document.body.innerHTML;
	}

	printInvoice(): void {
		this.popupWin = window.open();
		this.popupWin.document.open();
		this.popupWin.document.write(
			'<html><head><link rel="stylesheet" type="text/css" href="styles/main.css" /></head><body onload="window.print()">' +
				this.printContents +
				'</html>'
		);
		this.popupWin.document.close();
	}
}
