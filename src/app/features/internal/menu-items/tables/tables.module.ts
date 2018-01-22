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
import { DataTableComponent } from './components/data-table/data-table.component';

import { TablesRoutingModule } from './tables-routing.module';
import { TablesService } from './services/tables.service';
import { TablesEffects } from './effects/tables.effects';
import { reducers } from './reducers';

import { StockItemExistsGuard } from './services/stock-item-guard.service';

// Dialogs
import { BaseDialogComponent } from '@app/components/dialogs/base-dialog/base-dialog.component';
import { AddStockItemDialogComponent } from './dialogs/add-stock-item-dialog/add-stock-item-dialog.component';
import { DeleteStockItemDialogComponent } from './dialogs/delete-stock-item-dialog/delete-stock-item-dialog.component';
import { EditStockItemDialogComponent } from './dialogs/edit-stock-item-dialog/edit-stock-item-dialog.component';

export const COMPONENTS = [TablesComponent, DataTableComponent];

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
	entryComponents: [
		// Dialogs
		BaseDialogComponent,
		AddStockItemDialogComponent,
		DeleteStockItemDialogComponent,
		EditStockItemDialogComponent
	],
	declarations: [
		...COMPONENTS,
		// Dialogs
		BaseDialogComponent,
		AddStockItemDialogComponent,
		DeleteStockItemDialogComponent,
		EditStockItemDialogComponent
	],
	exports: COMPONENTS,
	providers: [TablesService, StockItemExistsGuard]
})
export class TablesModule {}
