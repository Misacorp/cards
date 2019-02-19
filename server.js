// Serve our application

import express from 'express';

const app = express();
const port = 1337;

// Serve the ./dist folder as static files.
app.use(express.static('public'));
app.use('/dist', express.static('dist'));

app.listen(port, () => console.log(`Cards running on port ${port}!`));
