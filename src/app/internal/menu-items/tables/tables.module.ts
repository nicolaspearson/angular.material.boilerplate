import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CdkTableModule } from '@angular/cdk/table';

import { SharedModule } from '@app/shared/shared.module';
import { PipesModule } from '@app/shared/pipes';

// Components
import { TablesComponent } from './tables.component';
import { TableDataTableComponent } from './components/data-table/data-table.component';

import { TablesRoutingModule } from './tables-routing.module';
import { TablesService } from './services/tables.service';
import { TablesEffects } from './effects/tables.effects';
import { reducers } from './reducers';

import { StockItemExistsGuard } from './services/stock-item-guard.service';

export const COMPONENTS = [TablesComponent, TableDataTableComponent];

@NgModule({
	imports: [
		CdkTableModule,
		CommonModule,
		SharedModule,
		PipesModule,
		RouterModule,
		StoreModule.forFeature('tables', reducers),
		EffectsModule.forFeature([TablesEffects]),
		TablesRoutingModule
	],
	declarations: COMPONENTS,
	exports: COMPONENTS,
	providers: [TablesService, StockItemExistsGuard]
})
export class TablesModule {}
