# React Refresh Workshop

## Welcome!

Hello, and welcome to the Emerging Digital Academy: React Refresh Workshop. Today we will be going over the fundamentals of Functional Base React, so by the end you will have the skills required to make practical React applications!

## Requirements

- An understanding of the following concepts
  - HTML + CSS
  - JavaScript
  - Document Object Model (DOM) and DOM manipulation
- A text editor of your choice (I will be using [VSCode](https://code.visualstudio.com/download))
- A installation of [Node.js](https://nodejs.org/en/) (Built with -v 16.18.1)
- An eagerness to learn

## Agenda

The content we will be going over will include:

- React Getting Started
- JSX
- Class Components vs Functional Components
- State
- Props
- Hooks
- Conditional Rendering
- List Rendering
- React Router

We will wrap up the workshop by taking everything learned and combining it with create-react-app to build a Task Management Single Page Application (SPA)!

## Repo Tour

To render each each component, `cd` into the `my-app` folder, import and call the component you'd like to work on, and finally, run the command `npm start` to start the web server.

- `./notes`:
  - Inside you will find a folder for each module of the workshop that we will be covering
  - `./notes/my-app`:
    - Initialized react app that we will be using for notes
    - `./notes/my-app/src`:
      - The files that you edit when you are building a react app
      - `./notes/my-app/src/components`:
        - All of the notes that will be presented during the workshop
        - `./notes/my-app/src/components/reused-components`:
          - Custom components that are shared across the application
      - `./notes/my-app/src/static`:
        - Static files including CSS and images
      - `./notes/my-app/src/index.js`:
        - The root file of our project
      - `./notes/my-app/src/App.jsx`:
        - The root file for the React application
- `./project` (solution branch only):
  - The code to reference during the building portion of the workshop
- `./.gitignore`:
  - Hiding node_modules and package-lock files from git
- `./README.md`:
  - Project introduction

## Resources

Different resources that will be helpful throughout the workshop:

- [React Docs](https://reactjs.org/docs/react-api.html)
- [W3 Schools](https://www.w3schools.com/REACT/default.asp)
