import { Directive, ElementRef, AfterViewInit } from '@angular/core';

@Directive({ selector: '[appAppendSubmenuIcon]' })
export class AppendSubmenuIconDirective implements AfterViewInit {
	el: ElementRef;
	constructor(el: ElementRef) {
		this.el = el;
	}

	ngAfterViewInit() {
		const $el = $(this.el.nativeElement);

		$el
			.find('.prepend-icon')
			.prepend('<i class="material-icons">keyboard_arrow_right</i>');
	}
}
