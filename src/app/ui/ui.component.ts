import { Component } from '@angular/core';
import { UIService } from './ui.service';

import 'styles/font-awesome.scss';

@Component({
	selector: 'app-ui',
	styles: [],
	template: `<router-outlet></router-outlet>`,
	providers: [UIService]
})
export class UIComponent {}
