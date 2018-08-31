import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

import routes from './src/routes/crmRoutes';

const app = express();
const PORT = 3000;

// initializing mongoose
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/CRMdb', {
    useNewUrlParser: true
});

// bodyparser setup
app.use(bodyParser.urlencoded( { extended: true }));
app.use(bodyParser.json())

// initializing routes
routes(app);

// serving static files
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send(`Node and Express server running on port ${PORT}`);
});

app.listen(PORT, () => {
    console.log(`Your server is running on port ${PORT}`);
});