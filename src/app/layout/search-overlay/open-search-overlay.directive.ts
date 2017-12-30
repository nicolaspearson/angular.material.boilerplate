import { Directive, ElementRef, AfterViewInit } from '@angular/core';
import { LayoutService } from '../layout.service';

@Directive({ selector: '[appOpenSearchOverlay]' })
export class OpenSearchOverlayDirective implements AfterViewInit {
	constructor(private el: ElementRef, private layoutService: LayoutService) {}

	ngAfterViewInit() {
		const $el = $(this.el.nativeElement);
		const $body = $('#body');

		$el.on('click', e => {
			this.openOverlay();
		});
	}

	openOverlay() {
		this.layoutService.updateSearchOverlayState('open');
	}
}
