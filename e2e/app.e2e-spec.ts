import { AppPage } from './app.po';

describe('angular.material.boilerplate app', () => {
	let page: AppPage;

	beforeEach(() => {
		page = new AppPage();
	});

	it('should display a welcome message', () => {
		page.navigateTo();
		expect(page.getParagraphText()).toEqual('Welcome to the app!');
	});
});
