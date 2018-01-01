import { Directive, ElementRef, AfterViewInit } from '@angular/core';

@Directive({ selector: '[appDemoAccordionNav]' })
export class AccordionNavDirective implements AfterViewInit {
	el: ElementRef;
	constructor(el: ElementRef) {
		this.el = el;
	}

	ngAfterViewInit() {
		// on click, open it's own ul, close sibling li opened ul & sub ul
		// on click, close it's own ul & sub ul

		const $nav = $(this.el.nativeElement);
		const slideTime = 250;
		const $lists = $nav.find('ul').parent('li');
		$lists.append(
			'<i class="material-icons icon-has-ul">arrow_drop_down</i>'
		);
		const $As = $lists.children('a');

		// Disable a link that has ul
		$As.on('click', event => {
			event.preventDefault();
		});

		// Accordion nav
		$nav.on('click', e => {
			const target = e.target;
			const $parentLi = $(target).closest('li'); // closest, insead of parent, so it still works when click on i icons
			if (!$parentLi.length) {
				return;
			} // return if doesn't click on li
			const $subUl = $parentLi.children('ul');

			// let depth = $subUl.parents().length; // but some li has no sub ul, so...
			const depth = $parentLi.parents().length + 1;

			// filter out all elements (except target) at current depth or greater
			const allAtDepth = $nav.find('ul').filter(function() {
				if (
					$(this).parents().length >= depth &&
					this !== $subUl.get(0)
				) {
					return true;
				}
			});
			allAtDepth
				.slideUp(slideTime)
				.closest('li')
				.removeClass('open');

			// Toggle target
			if ($parentLi.has('ul').length) {
				$parentLi.toggleClass('open');
			}
			$subUl.stop().slideToggle(slideTime);
		});
	}
}
