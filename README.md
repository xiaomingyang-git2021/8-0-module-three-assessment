# Module Three Assessment

This challenge is designed to assess the React skills you have developed so far.

## Assessment Setup

### Getting started

1. Fork and clone this repository.

1. Navigate to the cloned repository's directory on your command line. Then, run the following command:

   ```
   npm install
   ```

   This will install the libraries needed to run the tests.

1. Open up the repository in VSCode. Follow the instructions below to complete the Lab.

### Tests

To run the tests, you can run the following command from the command line. You will need to be in the root directory of your local directory.

```
npm run cypress
```

This will open the Cypress testing window, where you can click to run an individual suite of tests or all of the tests at once.

## Instructions

Using the [Studio Ghibli API](https://ghibliapi.herokuapp.com/), you are going to create a frontend-only application that displays information about the movies, characters, and locations created by Studio Ghibli.

### Features

You will need to complete features for four different pages and create a navigation bar that is present on all pages.

#### Home page (`/`)

- [ ] Your home page should be accessible via the `/` route and include the following text:

  ```
  Welcome to GhibliApp
  ```

  ![Welcome Page](./assets/welcome.png)

#### Navigation bar

- [ ] The navigation bar should be created using the `nav` element.

- [ ] The navigation bar should include a logo of your choosing which is 50px wide and 50px high. It should be displayed in the upper-left corner of the page.

- [ ] Clicking on the logo should return the user to the home page.

- [ ] The navigation bar should includes links for "Movies", "People", and "Locations". Each link should go to the related route.

#### Movies page (`/movies`)

- [ ] All content should be inside some element with the class `.movies`.

- [ ] Has the text "Select a Movie" on the page.

- [ ] Has a `select` dropdown that includes an "empty" option element followed by all of the films produced by Studio Ghibli.

  ![Before Select](./assets/movieSelect1.png)

- [ ] When a new option is selected from the dropdown, the movie's title, release date, and description should appear underneath the dropdown. At least the title of the movie should be in some kind of heading.

  ![After Select](./assets/movieSelect2.png)

- [ ] When the "empty" option is selected yet again, the film's information should disappear.

#### People page

- [ ] All content should be inside of some element with the class `.people`.

- [ ] Has the text "Search for a Person" on the page.

- [ ] Has a form that includes a text input and a submit button. Use a `button` element for the submit button, not an `input` element.

  ![Pre Search](./assets/search1.png)

- [ ] After typing a name into the text field and pressing submit, the relevant character's name, age, and gender should be shown on the page. Submitting the form should also clear the text field.

  ![Successful Search](./assets/search2.png)

- [ ] If the search does not yield any results, the text "Not Found" should be displayed.

  ![Not found](./assets/search3.png)

#### Locations page

- [ ] All content should be inside of some element with the class `.locations`.

- [ ] Has the text "List of Locations" on the page.

- [ ] When arriving on the page, has a button with the text "Show Locations".

  ![locations hidden](./assets/locations1.png)

- [ ] When the "Show Locations" button is clicked, the text should be changed to "Hide Locations".

- [ ] When the "Show Locations" button is clicked, all of the locations received from the API should be displayed. Each location should include it's name, climate, and terrain.

  Use list items to display each of these locations.

  ![locations showing](./assets/locations2.png)

- [ ] When the "Hide Locations" button is clicked, all of the locations should be hidden.

#### Additional tasks

- [ ] Your application should have no warnings or errors from React.

- [ ] Once you are completed with the above tasks, add styling to the application.
