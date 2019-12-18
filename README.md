## The Siren Project

The siren project is a web app that enables a user to get the latest news headlines based on the country, provided by a user, and preferred categories. After providing this information, the user not confined to just a country or initial categories selected. The user can make these changes easily anytime and anywhere in the app.

### Preview

[Live preview here](https://the-siren-project.herokuapp.com)

## Prerequisites

You will need to get your own API key from [newsapi.org](https://newsapi.org) You can sign up to get the developer api which is free but comes with limitations. The get the same result as the live preview, get the developer access.

## Setup

To run this project make sure you have generated your api key.

### Step 1

```bash
$ cd ../the-siren-project
$ npm install
```

This will install all the packages needed for functionality.

### Step 2

Create a `.env` file at the root folder of the app.

Example

```
public
src
.env <- here
.gitignore
```

### Step 3

Create a `REACT_APP_API_KEY` variable in your .env file and assign it the generated api key

Example

```.env
REACT_APP_API_KEY=2323nlsjfslapikeysecret
```

### Step 4

Run the react app from the command line

```bash
$ npm start
```

## Built With

Project is created with:

- [Html](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [Css](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [Sass](https://sass-lang.com)
- [Ant Design](https://ant.design/docs/react/introduce)
- [React js](https://reactjs.org)
- [React Router](https://reacttraining.com/react-router/)
- [Redux](https://redux.js.org)
- [Redux Saga](https://redux-saga.js.org)
- [Redux Persist](https://github.com/rt2zz/redux-persist)
- [Reselect](https://github.com/reduxjs/reselect)
- [Country City State Json](https://github.com/khkwan0/countryCityStateJson)

## Acknowledgements

- API from [News API](https://newsapi.org)
- UI Design from [The Siren by Kulikov IIly](https://freebiesbug.com/sketch-freebies/the-siren/)
