import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';

import { ChartsRoutingModule } from './charts-routing.module';
import { ChartsComponent } from './charts.component';

import { ChartBarComponent } from './bar/bar.component';
import { ChartFunnelComponent } from './funnel/funnel.component';
import { ChartGaugeComponent } from './gauge/gauge.component';
import { ChartLineComponent } from './line/line.component';
import { ChartMoreComponent } from './more/more.component';
import { ChartPieComponent } from './pie/pie.component';
import { ChartRadarComponent } from './radar/radar.component';
import { ChartScatterComponent } from './scatter/scatter.component';

@NgModule({
	imports: [ChartsRoutingModule, SharedModule],
	declarations: [
		ChartsComponent,
		ChartBarComponent,
		ChartFunnelComponent,
		ChartGaugeComponent,
		ChartLineComponent,
		ChartMoreComponent,
		ChartPieComponent,
		ChartRadarComponent,
		ChartScatterComponent
	]
})
export class ChartsModule {}
