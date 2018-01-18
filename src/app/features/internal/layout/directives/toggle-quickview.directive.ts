import { Directive, ElementRef, Input, AfterViewInit } from '@angular/core';

@Directive({ selector: '[appToggleQuickview]' })
export class ToggleQuickviewDirective implements AfterViewInit {
	@Input() appToggleQuickview: string;

	el: ElementRef;

	constructor(el: ElementRef) {
		this.el = el;
	}

	ngAfterViewInit() {
		const $el = $(this.el.nativeElement);
		const $body = $('#body');
		const target = this.appToggleQuickview;
		let qvClass = 'quickview-open';

		if (target) {
			qvClass = qvClass + '-' + target;
		}

		$el.on('click', e => {
			$body.toggleClass(qvClass);
			e.preventDefault();
		});
	}
}
