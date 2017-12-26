import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { LoginFormComponent } from './components/login-form/login-form.component';

import { SharedModule } from '../shared/shared.module';

import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth-guard.service';
import { AuthEffects } from './effects/auth.effects';
import { reducers } from './reducers';

export const COMPONENTS = [LoginPageComponent, LoginFormComponent];

@NgModule({
	imports: [CommonModule, ReactiveFormsModule, SharedModule],
	declarations: COMPONENTS,
	exports: COMPONENTS
})
export class AuthModule {
	static forRoot(): ModuleWithProviders {
		return {
			ngModule: RootAuthModule,
			providers: [AuthService, AuthGuard]
		};
	}
}

@NgModule({
	imports: [
		AuthModule,
		RouterModule.forChild([{ path: 'login', component: LoginPageComponent }]),
		StoreModule.forFeature('auth', reducers),
		EffectsModule.forFeature([AuthEffects])
	]
})
export class RootAuthModule {}
