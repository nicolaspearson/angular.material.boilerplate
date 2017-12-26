# README

An opinionated AngularJS starter project built using [Angular Material](https://material.angular.io), it includes a login page, and various other pre-optimizations that I prefer using when developing an AngularJS app, e.g. RxJS, NgRxStore, etc.

### How do I get set up?

* Install a text editor, e.g. Visual Studio Code is recommended
* Install Node, e.g. brew install node
* Clone the repository

### Running the project

1. Navigate into the cloned folder `cd angular.material.boilerplate`
2. Run `npm install / yarn install`
3. Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build, alternatively use `npm run build:prod`
4. Run `npm run start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
5. Run `npm run test` to execute the unit tests via [Karma](https://karma-runner.github.io).
6. Run `npm run e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Generating new Components

* Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Technologies used:

### For the application

* [AngularJS](https://angular.io/)
* [Angular Material](https://material.angular.io)
* [@ngrx/effects](https://www.npmjs.com/package/@ngrx/effects)
* [@ngrx/entity](https://www.npmjs.com/package/@ngrx/entity)
* [@ngrx/router-store](https://www.npmjs.com/package/@ngrx/router-store)
* [@ngrx/store](https://www.npmjs.com/package/@ngrx/store)
* [@ngrx/store-devtools](https://www.npmjs.com/package/@ngrx/store-devtools)
* [HammerJS](https://www.npmjs.com/package/hammerjs)
* [ngrx-store-freeze](https://www.npmjs.com/package/ngrx-store-freeze)
* [Rxjs](https://www.npmjs.com/package/rxjs)
* [Socket.IO](https://www.npmjs.com/package/socket.io)
* [Typescript](https://www.typescriptlang.org/)

### For testing

* [Jasmine](https://jasmine.github.io/)
* [Karma](https://karma-runner.github.io)
* [Protractor](http://www.protractortest.org/)
