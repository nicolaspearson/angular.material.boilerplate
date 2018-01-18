import { Directive, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { LayoutService } from '@app/features/internal/layout/services/layout.service';
import { Subscription } from 'rxjs/Subscription';

@Directive({ selector: '[appSearchOverlay]' })
export class SearchOverlayDirective implements AfterViewInit, OnDestroy {
	subscription: Subscription;

	$el;
	$body;
	$searchInput;
	$closeOverlayBtn;

	constructor(private el: ElementRef, private layoutService: LayoutService) {
		this.subscription = layoutService.searchOverlayState$.subscribe(
			state => {
				this.updateSearchOverlay(state);
			}
		);
	}

	ngAfterViewInit() {
		this.$el = $(this.el.nativeElement);
		this.$body = $('#body');
		this.$searchInput = this.$el.find('#overlay-search-input');
		this.$closeOverlayBtn = this.$el.find('#overlay-close');

		this.$el.on('keyup', e => {
			if (e.keyCode === 27) {
				// When ESC is pressed
				this.closeOverlay();
			}
		});

		this.$closeOverlayBtn.on('click', e => {
			this.closeOverlay();
			e.preventDefault();
		});
	}

	openOverlay() {
		this.$body.addClass('overlay-active');

		// [delay] should >= `visibility` transition duration in CSS, see _overlay.scss
		// otherwise auto-focus won't work since element is not there yet
		if (this.$searchInput) {
			setTimeout(() => {
				this.$searchInput.focus();
			}, 301);
		}
	}

	closeOverlay() {
		this.$body.removeClass('overlay-active');

		if (this.$searchInput) {
			this.$searchInput.val(function() {
				return this.defaultValue;
			});
		}
	}

	updateSearchOverlay(state) {
		if (state === 'open') {
			this.openOverlay();
		}
	}

	ngOnDestroy() {
		this.subscription.unsubscribe();
	}
}
