import {
	Directive,
	ElementRef,
	Input,
	AfterViewInit,
	OnDestroy
} from '@angular/core';
import {
	Router,
	Event as RouterEvent,
	NavigationStart,
	NavigationEnd,
	NavigationCancel,
	NavigationError
} from '@angular/router';
import { DemoLayoutService } from '../services/demo-layout.service';
import { Subscription } from 'rxjs/Subscription';

@Directive({
	selector: '[appDemoPreloader]'
})
export class PreloaderDirective implements AfterViewInit, OnDestroy {
	subscription: Subscription;

	constructor(
		private el: ElementRef,
		private router: Router,
		private demoLayoutService: DemoLayoutService
	) {
		router.events.subscribe((event: RouterEvent) => {
			this.navigationInterceptor(event);
		});

		this.subscription = demoLayoutService.preloaderState$.subscribe(
			state => {
				this.updatePreloader(state);
			}
		);
	}

	$el;

	ngAfterViewInit() {
		this.$el = $(this.el.nativeElement);
	}

	active() {
		if (this.$el) {
			this.$el.removeClass('hide').addClass('active');
		}
	}

	hide() {
		if (this.$el) {
			this.$el.addClass('hide').removeClass('active');
		}
	}

	// Shows and hides the loading spinner during RouterEvent changes
	navigationInterceptor(event: RouterEvent): void {
		if (event instanceof NavigationStart) {
			this.active();
		}
		if (event instanceof NavigationEnd) {
			this.hide();
		}

		// Set loading state to false in both of the below events to hide the spinner in case a request fails
		if (event instanceof NavigationCancel) {
			this.hide();
		}
		if (event instanceof NavigationError) {
			this.hide();
		}
	}

	updatePreloader(state) {
		if (state === 'active') {
			this.active();
		}

		if (state === 'hide') {
			this.hide();
		}
	}

	ngOnDestroy() {
		// prevent memory leak when component is destroyed
		this.subscription.unsubscribe();
	}
}
