import express from 'express';

const app = express();

const port = 8000;

require('./app/routes').default(app);

app.listen(port, () => {
    console.log('Listening on port ' + port);
});
