# TechnicalTest

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding


## Features Description

### Login
- Created login interface with userName & studentId field where userName = 'abe', studentId = 'abc-12'. In this field there added two validation empty string and undefined property.
- Also added notification on given validation

### Examinee page
- In this section an examinee will choose on which topic/subject he/she wants to give examination for and on choosen topic next questBank will arrive

### QuestionBank 
- On basis of selected topic multiple questions will render. By clicking on next another question will come. Here I keep 4 question and then have to click on Submit button
- one can back to the Examinee page by clicking on 'Back' btn
### Answer Sheet
- In this page the correction of question has been dynamically solved.

### Logout
- At the top right there's a 'Logout' button

## Needed Tools

### For Backend
- Node js
- ExpressJs

## Use Command
After installing Node Js and ExpressJs, For running backend type 'node test.js'. Without run this you cannot find json data

### Json
- Created two json for Angular And Java named angular.json, java.json on node folder
- These two json are routed with the expressJs file

### For Fronted
Angular Cli
Angular Material
Bootstarp
(Checkout package.json for more details)
some inline & external css added on the style.css

## Use Command
npm install -g @angular/cli
ng new technicalTest
cd technicalTest
ng serve

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
