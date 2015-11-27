Kraken-X
======================

[![Build Status](https://travis-ci.org/sayden/krakenx.svg?branch=develop)](https://travis-ci.org/sayden/krakenx)
[![Code Climate](https://codeclimate.com/github/sayden/krakenx/badges/gpa.svg)](https://codeclimate.com/github/sayden/krakenx)
[![Test Coverage](https://codeclimate.com/github/sayden/krakenx/badges/coverage.svg)](https://codeclimate.com/github/sayden/krakenx/coverage)
[![Dependency Status](https://gemnasium.com/sayden/krakenx.svg)](https://gemnasium.com/sayden/krakenx)
[![Codacy Badge](https://api.codacy.com/project/badge/grade/197e385053ef49ceb9cbb64e1b5f44e8)](https://www.codacy.com/app/mariocaster/krakenx)

A krakenjs based app with JSX templating and React with NoSQL persistence

### Setup
In setup you simply need to install node and bower packages.

```sh
  npm install
  bower install
  # Also done by:
  npm run install-all
```

### Build
Then we use browserify to build a bundle.js file that will be load in front
```sh
  npm run browserify
```

### Test
```sh
	npm test
```

### Run
This command will build and start nodejs server. Open your browser and go to [http://localhost:3000](http://localhost:3000)
```sh
  npm start
```


# Structure of a project
We wanted a more "modular" approach of file structure so we are not using the "mixed" approach of monolithic app where all controllers are mixed in the same folder. Instead we are using a modules folder that contains each "business" folder within:

- lib (Application specific functions)
- modules
  - articles
    - components
    - models
    - routes
    - views
    - Actions.jsx
    - Store,jsx
  - user
    - components
    - models
    - routes
    - views
    - Actions.jsx
    - Store,jsx
  - react-global-components
    - loginButtons
      - GoogleLogin (file)
      ...
  - views
    - app
    - layout
    - home (public)
    - NavBar
  - main.js
  - router.jsx (React-router config)
- public (static serve folder)

So, with our approach, a new business will be placed inside `modules` folder **with the same folder structure** so the "discover" can load the routes of server and front. This way, if we want to add a new "business" called "cathegories" we will add:

- modules
  - cathegories
    - components (React atomic components)
    - models (Server side models, mongoose models, etc.)
    - routes (Server routes and API endpoints)
    - views (Server/Client React views for universal, previously isomorphic, renders)
    - Actions (a Reflux action files)
    - Store (A Reflux ready store)

A new "global" view (a view or template that will be used across the entire application) must be placed in the upper "views" folder. So, to add a bottom bar we simply add the file to this folder so we can access it from React components.

# Authentication
Passport is used to authenticate user in the app. More strategies will be added in the future but until now all strategies configuration are available in `config/credentials`. config.js contains the API keys from each strategy.

# Configuration
`config/config.js` contains middleware configuration options done by ["meddleware"](https://github.com/krakenjs/meddleware) Until now it is being a convenient way to use config middleware but it may be removed in the future.
