## The Siren Project

The siren project is a web app that enables a user get latest news headlines based on country, provided by user, and preferred categories. After providing this information, the user not confined to just a country or intial categories selected. The user can make these changes easily anytime and anywhere in the app.

### Preview

[Live preview here](https://the-siren-project.herokuapp.com)

## Prerequisites

You will need to get your own API key from [newsapi.org](https://newsapi.org) You can sign up to get the developer api which is free but comes with limitations. The get the same result as the live preview, get the developer access.

### Step 1

Create a `.env` file at the root folder
Example

```
public
src
.env <- here
.gitignore
```

### Step 2

Create a `REACT_APP_API_KEY` variable in your .env file and assign it with the generated api key
Example

```.env
REACT_APP_API_KEY=2323nlsjfslapikeysecret
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

## Setup

To run this project

```bash
$ cd ../the-siren-project
$ npm install
$ npm start
```

## Acknowledgements

- API from [News API](https://newsapi.org)
- UI Design from [The Siren by Kulikov IIly](https://freebiesbug.com/sketch-freebies/the-siren/)
