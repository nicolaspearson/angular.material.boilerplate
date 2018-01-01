import { Directive, ElementRef, AfterViewInit } from '@angular/core';
import { DemoLayoutService } from '../services/demo-layout.service';

@Directive({ selector: '[appDemoOpenSearchOverlay]' })
export class OpenSearchOverlayDirective implements AfterViewInit {
	constructor(
		private el: ElementRef,
		private demoLayoutService: DemoLayoutService
	) {}

	ngAfterViewInit() {
		const $el = $(this.el.nativeElement);
		const $body = $('#body');

		$el.on('click', e => {
			this.openOverlay();
		});
	}

	openOverlay() {
		this.demoLayoutService.updateSearchOverlayState('open');
	}
}
