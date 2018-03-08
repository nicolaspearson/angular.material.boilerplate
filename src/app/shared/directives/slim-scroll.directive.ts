import { Directive, ElementRef, Input, AfterViewInit } from '@angular/core';
import 'jquery-slimscroll/jquery.slimscroll.min.js';

@Directive({ selector: '[appSlimScroll]' })
export class SlimScrollDirective implements AfterViewInit {
	el: ElementRef;
	constructor(el: ElementRef) {
		this.el = el;
	}

	@Input() scrollHeight: string;

	ngAfterViewInit() {
		const $el = $(this.el.nativeElement);

		($el as any).slimScroll({
			height: this.scrollHeight || '100%'
		});
	}
}
