import express from 'express';

// we'll talk about this in a minute:
import serverRenderer from './middleware/renderer';

const PORT = process.env.PORT || 3000;

// initialize the application and create the routes
const app = express();

// root (/) should always serve our server rendered page
app.use('*', serverRenderer);

// other static resources should just be served as they are
app.use(express.static('build', { maxAge: '30d' }));

// start the app
app.listen(PORT, (error) => {
    if (error) {
        return console.log('something bad happened', error);
    }

    console.log("listening on " + PORT + "...");
});