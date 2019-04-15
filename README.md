# AngularJS Users Details App

This is an AngularJS Project implements a scalable hierarchy to easily scale the application as extra features required. It always contains a Gulp file with many features to easily build AngularJS application.

## [ Live Demo](https://users-detials.netlify.com " Live Demo")

## Installation

Run `npm install` to install required npm dependancies.

## Development server

Run `gulp dev` for a dev server. Navigate to `http://localhost:8000/index.html`. The app will automatically reload if you change any of the source files.

## Build

Run `gulp build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Specification

> Imagine this is an MVP and additional features are already planned for the future. Try structuring the application in a way, that you can easily extend it when the time comes and reuse as much of the code you have already written for this MVP.

  - Create an app that displays all users (#/users) from  /data/users.json file, and a user details page (#/users/{id}).
  - The file should be fetched through ajax, and the data needs to be displayed inside a <table />. 
  - The File should only be fetched once once the app starts. After that, we are working with users from memory, but we need to take care that real backend can be easily added later.
  - The table row should be an Angular directive and each row needs to have checkboxs to select a row.
  - Every row needs to have 3 actions
       *  Show - modal that displays '{firstName} {lastName}, age:{calculateAgeHere}' (use https://angular-ui.github.io/bootstrap/#/modal)
       *  Delete - removes a user from the table
       *  Edit - Opens user detail page
   *  The table should display 10 items per page and needs to have previous-current-next buttons on the bottom.
   *  On the top of the table, place 2 buttons. The buttons are disabled while nothing is selected.
        * Delete - removes selected item(s)
        * Download - downloads marked item as a csv file (use ; as separator)
    * BONUS
        * Display the number of selected items.
        * On the detail page, enable edit of firstname and lastname, add validation and put save (save changes) and cancel (return to /user without saving) buttons.
        * If data was changed in the form and the user clicks "cancel", display a confirm modal with yes/no (https://angular-ui.github.io/bootstrap/#/modal)
