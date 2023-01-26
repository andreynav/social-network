# General Notes

The current project is a project of social network executed due to the React, Redux, Styled components.

The project used the API calls to back-end, possibility to set up your own user profile, set up the languages and themes.

## Project structure

The project has multilayer structure:

- `public` - used to keep static content for builds
- `api` - used to keep API calls functionality
- `assets` - used to keep static content
- `components` - used to keep react components
  - `App` - used to keep main App component
  - `...` - rest of components
  - `common` - used to keep common for whole app components
- `fonts` - used to keep fonts
- `hoc` - used to keep hocs
- `hook` - used to keep hooks
- `locales` - used to keep locales for translations
- `store` - used to keep store
- `styles` - used to keep styles
- `tests` - used to keep tests
- `utils` - used to keep utils for helping

```

├── public
├── src
│   ├── api
│   ├── assets
│   ├── components
│   │   ├── App
│   │   ├── Captcha
│   │   ├── Dialogs
│   │   ├── Footer
│   │   ├── FormPostMessage
│   │   ├── Header
│   │   ├── InputField
│   │   ├── Login
│   │   ├── Music
│   │   ├── Navbar
│   │   ├── News
│   │   ├── NotFound
│   │   ├── Paginator
│   │   ├── PhotoSection
│   │   ├── Profile
│   │   ├── Settings
│   │   ├── TextAreaField
│   │   ├── Users
│   │   ├── common
│   ├── fonts
│   ├── hoc
│   ├── hook
│   ├── locales
│   ├── store
│   ├── styles
│   ├── tests
│   └── utils
```

## Dependencies

The project has the next dependencies in the [package.json](package.json) file

## Installation

1. Clone project to your PC by the following command:

```bash
  git clone https://github.com/andreynav/social-network.git
```

2. Open the root directory and enter the following command:

```bash
  npm install
```

## Running project

To run project, open the root directory and enter the following command:

```bash
  npm start
```

The command runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Running tests

To run the tests, open the root directory and enter the following command:

```bash
  npm test
```

Launches the test runner in the interactive watch mode.
See the folder [tests](src/tests) for information about existing tests.

## Running build

To run build, open the root directory and enter the following command:

```bash
  npm build
```

Builds the app for production to the `build` folder.

It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## License

The project is open source software provided under the [Apache License 2.0](LICENSE.md).
