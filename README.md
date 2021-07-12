## Personal thoughts 
This was a very interesting challenge for me, due to the fact that I encountered rather new technologies and a bit of an UX challenge.

I have chosen a table to display the launches. I have chosen the table from Ant Design, due to the fact that it's very customisable
and provided me with already built-in features.

From the choises of "infinite scrolling" or "pagination", I went with the second option, due to the fact that a pagination was already implemented in the Ant Design table. For the infinite scrolling, there is a library called "react-virtualized", where this functionality is implemented, but I was not sure if it had the other features that I needed (ex. adding subcolumns).

For the "Compare" button and selected launches, I was not sure about a scenario: what should happen if I would select more than 2: 
    1. If I would select a 3rd launch, should the app automatically deselect the first selected launch?
    2. Or should I let the user select how many launches he wants.

I went with the second option, due to the fact that the "Compare" button enables only if you have 2 options selected and it would not confuse the user.

## More time
If I had more time, I would have implemented: 
    - the E2E test
    - server-side pagination
    - research for expandable tables for the "cores" and "payload" fields

## Problems encountered

My biggest challenges emerged from the fact that I have little experience with TypeScript, GraphQL and E2E testing implementations, thus a bit of time for research and troubleshooting where necessary.

Another issue, let's say, was the fact that I had to display all the data. I wasn't sure how to display the "cores" and "payloads" from the stages of the rocket, due to the fact that they can have multiple values in those arrays. My choice was to display them in a table contained by a modal. 

## How to run the project and other available Scripts

Clone or download the project into your local machine.

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

