# React.js Schema Based Form Fields 🚀

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).<br />
The project includes extra packages and improved file structure.

## Todos 👩‍💻

-   Testing.

## Features 🦸

-   **Typescript** - Superset of JavaScript which primarily provides optional static typing, classes and interfaces.
-   **Storybook** - Storybook is an open source tool for building UI components and pages in isolation.
-   **Bootstrap** - Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development.

## Utility functions 🛠

-   updateObjectValueByPath
-   getFormValues

## Folders and files structure 🗺

```

-   assets

    -   fonts // used for Storybook
    -   styles
        -   bootstrap // configurations
        -   _variables.scss
        -   base.scss

-   components // reusable react components

    -   Button
    -   Form
        -   FieldWrapper
        -   SectionLabel
        -   Select
        -   Switch
        -   SectionLabel
        -   fieldsMap.ts // map for input fields
        -   Form.module.scss
        -   Form.stories.tsx
        -   Form.tsx
        -   index.ts
        -   Types.ts // all types for the Form and its components
    index.ts // Exports all the public components

    // Each component has the following structure:

    -   -   ComponentName
            -   ComponentName.tsx
            -   ComponentName.module.scss
            -   ComponentName.stories.tsx
            -   index.ts

-   containers

    -   App

-   lib

    -   helpers.ts

-   schemas

    -   formSchema.json // the main form schema

```

## Dependencies that were added 👷🏼‍♀️

### Production

-   bootstrap
-   lodash

### Development

-   @storybook
-   node-sass

## How to launch the project 🏁

Install [Node.js](https://nodejs.org/) and then open the Terminal/CMD and navigate to the project's folder.
Run the following command:

```bash
npm insatll
```

### Development evnironment

```bash
npm start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### Production build

```bash
npm run build
```

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Testing

```bash
npm run test
```

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## `Stay safe 😷`
