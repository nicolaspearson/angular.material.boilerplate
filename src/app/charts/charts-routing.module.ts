import { Routes, RouterModule } from '@angular/router';

import { ChartsComponent } from './charts.component';

import { ChartBarComponent } from './bar/bar.component';
import { ChartFunnelComponent } from './funnel/funnel.component';
import { ChartGaugeComponent } from './gauge/gauge.component';
import { ChartLineComponent } from './line/line.component';
import { ChartMoreComponent } from './more/more.component';
import { ChartPieComponent } from './pie/pie.component';
import { ChartRadarComponent } from './radar/radar.component';
import { ChartScatterComponent } from './scatter/scatter.component';

export const ChartsRoutes: Routes = [
	{
		path: '',
		component: ChartsComponent,
		children: [
			{ path: '', redirectTo: '/app/dashboard', pathMatch: 'full' },
			{ path: 'bar', component: ChartBarComponent },
			{ path: 'funnel', component: ChartFunnelComponent },
			{ path: 'gauge', component: ChartGaugeComponent },
			{ path: 'line', component: ChartLineComponent },
			{ path: 'more', component: ChartMoreComponent },
			{ path: 'pie', component: ChartPieComponent },
			{ path: 'radar', component: ChartRadarComponent },
			{ path: 'scatter', component: ChartScatterComponent }
		]
	}
];

export const ChartsRoutingModule = RouterModule.forChild(ChartsRoutes);
