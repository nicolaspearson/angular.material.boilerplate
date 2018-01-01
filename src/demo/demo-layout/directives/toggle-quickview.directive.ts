import { Directive, ElementRef, Input, AfterViewInit } from '@angular/core';

@Directive({ selector: '[appDemoToggleQuickview]' })
export class ToggleQuickviewDirective implements AfterViewInit {
	@Input() appDemoToggleQuickview: string;

	el: ElementRef;

	constructor(el: ElementRef) {
		this.el = el;
	}

	ngAfterViewInit() {
		const $el = $(this.el.nativeElement);
		const $body = $('#body');
		const target = this.appDemoToggleQuickview;
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
