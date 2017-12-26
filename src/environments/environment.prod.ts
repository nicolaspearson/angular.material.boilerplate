const packageJson = require('../../package.json');

export const environment = {
	appName: 'angular.material.boilerplate',
	appStoragePrefix: 'AMB-PROD-APP-',
	api: {
		endpoint: 'http://lupinemoon.co.za/api/v1',
		accessToken: 'SecretAccessToken'
	},
	envName: 'PROD',
	production: true,
	versions: {
		app: packageJson.version,
		angular: packageJson.dependencies['@angular/core'],
		ngrx: packageJson.dependencies['@ngrx/store'],
		material: packageJson.dependencies['@angular/material'],
		bootstrap: packageJson.dependencies.bootstrap,
		rxjs: packageJson.dependencies.rxjs,
		angularCli: packageJson.devDependencies['@angular/cli'],
		typescript: packageJson.devDependencies['typescript']
	}
};
