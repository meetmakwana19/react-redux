# Redux :

Three basic imp parts :

1. Action - What to do
2. Reducer - How to do
3. State - Has current/updated value with the help of Redux store

## WHY REDUX?

- When a JavaScript application grows big, it becomes difficult for the user to manage its state.

- Redux solves this problem by managing application's state with a single global object called Store

- Makes Testing very easy

- Consistency throughout the application

---

#### **ACTION**

- An action is a **plain JS object** that describes the intention to cause change(Like ordering something on a button click)
  - Has a `type` field like `{ type : 'ORDER' }`
  - Tells what to do but doesnt tell how to do
  - Pure Object example :
  - ```
        return {
        type : "INCREMENT",
        paylaod: num
    }
    ```
- `Action creator` is a pure function which creates an action. Example : incNumber() is the function which creates action

```
export const incNumber = (num) => {
    return {
        type : "INCREMENT",
        paylaod: num
    }
}
```

#### **REDUCER**

- A reducer is a function that determines changes to an application's state, return the new state and tell the store how to do.

```bash
ACTION ---→	 REDUCER ---→ STORE
    ↑                       |
    |                       |
    |-------VIEWS ←---------|
```

- Reducers are functions that take `current state` and an `action` both as arguements and return a `new state`.
- Example : Fruit making machine with 3 parts like redux which are : 1. Action(moving the handle), 2. Reducer(machine crushing fruit), 3. State(Juice result)

#### **REDUX STORE**

- Redux store brings together state, actions and reducers of the app
- Only a single centralised store is there for the app
- It is basically a reducer only with root reducer

#### **REDUX PRINCIPLES**

1. Single store is the single source of truth
2. State is read-only and to change it there needs to be a dispatch of an action
3. Immutability in data (data is consistent and not changing), one way data flow and predictibilty of the outcome
4. Changes are made with 'Pure Reducer Function' means if same argument is passed then same outcome will come.

--

UI Views - Kid
Action creators - Parents - will send 2 things: Type & Payload.
(parents dispatching msg via Whatsapp to mad boy for kid's demands)
Reducer - Can be a real world entity like Mad boy
(Mad boy fulfills demands of kid from redux store)

### [Redux Flow chart](https://i.ibb.co/VpdCXmB/ecdbd6fa-5433-42cb-ac71-21ecadf49142.jpg)

## Installation :

```
npm i redux react-redux
```

---

Project steps :

1. Gave appropriate CSS and View template
2. Made actions
3. Made Reducers and index.js to combine all reducers
4. Made store to
5. Got the state from the store inside app's index.js
6. Using `Provider` in the index.js for App
7. Getting state via useSelector() hook in the App.js and updating it via useDispatch()

---

- ReactJS has `useContext` hooks which works similar like redux
- But Redux has `useSelector` hook to deal with states

---

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
