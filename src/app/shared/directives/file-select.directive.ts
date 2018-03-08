import {
	Directive,
	EventEmitter,
	ElementRef,
	HostListener,
	Output
} from '@angular/core';

@Directive({ selector: '[appFileSelect]' })
export class FileSelectDirective {
	@Output()
	public onFileSelected: EventEmitter<File[]> = new EventEmitter<File[]>();

	protected element: ElementRef;

	public constructor(element: ElementRef) {
		this.element = element;
	}

	public isEmptyAfterSelection(): boolean {
		return !!this.element.nativeElement.attributes.multiple;
	}

	@HostListener('change')
	public onChange(): any {
		const files = this.element.nativeElement.files;
		this.onFileSelected.emit(files);

		if (this.isEmptyAfterSelection()) {
			this.element.nativeElement.value = '';
		}
	}
}
